import { createServerActionProcedure } from "zsa";
import { createClient } from "../../libs/utils/supabase/server";
import { z } from "zod";

export const authedProcedure = createServerActionProcedure().handler(
  async () => {
    try {
      const supabase = createClient();
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError) throw userError;
      const user = userData.user;

      return {
        user: {
          role: user?.user_metadata.role,
          id: user?.id,
        },
      };
    } catch {
      throw new Error("User not authenticated");
    }
  }
);

export const isAdminProcedure = createServerActionProcedure(
  authedProcedure
).handler(async ({ ctx }) => {
  const { role } = ctx.user;

  if (!role || role !== "admin") {
    throw new Error("User is not an admin");
  }

  return {
    user: {
      id: ctx.user.id,
      role: role,
    },
  };
});

export const ownsPostProcedure = createServerActionProcedure(isAdminProcedure)
  .input(z.object({ post_id: z.number() }))
  .handler(async ({ input, ctx }) => {
    const supabase = createClient();
    // Validate post ownership
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", input.post_id)
      .single();

    if (error) throw error;

    const { author_id } = data;

    if (ctx.user.id !== author_id) throw new Error("UNAUTHORIZED");

    return {
      user: ctx.user,
      post: {
        id: input.post_id,
      },
    };
  });
