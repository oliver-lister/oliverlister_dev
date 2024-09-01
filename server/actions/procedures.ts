import { createServerActionProcedure } from "zsa";
import { createClient } from "../../libs/utils/supabase/server";
import { z } from "zod";

const supabase = createClient();

export const authedProcedure = createServerActionProcedure().handler(
  async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error();

      const { id } = user;

      return {
        userId: id,
      };
    } catch {
      throw new Error("User not authenticated");
    }
  }
);

export const isAdminProcedure = createServerActionProcedure(
  authedProcedure
).handler(async ({ ctx }) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error();

  const { role } = user;

  if (role !== "admin") {
    throw new Error("User is not an admin");
  }

  return {
    user: {
      id: ctx.userId,
      role: role,
    },
  };
});

export const ownsPostProcedure = createServerActionProcedure(isAdminProcedure)
  .input(z.object({ post_id: z.string() }))
  .handler(async ({ input, ctx }) => {
    // Validate post ownership
    const { data, error } = await supabase
      .from("posts")
      .select("*") // Select all columns (or specify columns if needed)
      .eq("id", input.post_id)
      .single(); // Expecting one result

    const { author_id } = data;

    if (ctx.user.id !== author_id) throw new Error("UNAUTHORIZED");

    return {
      user: ctx.user,
      post: {
        id: input.post_id,
      },
    };
  });
