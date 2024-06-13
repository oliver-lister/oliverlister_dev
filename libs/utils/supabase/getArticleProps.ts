import { GetStaticProps } from "next";
import { LayoutProps } from "@/app/blog/_components/BlogPageLayout";
import { createClient } from "@/utils/supabase/server";

export const getArticleProps = async (
  path: string
): Promise<ReturnType<GetStaticProps<LayoutProps>>> => {
  const supabase = createClient();

  // Then we access the article where the path matches.
  const { data, error } = await supabase
    .from<LayoutProps>("article")
    .select("*")
    .eq("path", path)
    .single();

  // If there's an error or no data, then handle the error.
  if (error || !data) {
    return {
      notFound: true,
    };
  }

  // Finally, let's return the props to the layout.
  return {
    props: data,
  };
};
