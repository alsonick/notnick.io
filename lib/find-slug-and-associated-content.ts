import { NextRouter } from "next/router";

// The array MUST have a 'slug' property in order for this to work.

export const findSlugAndAssociatedContent = <T extends { slug: string }>(
  router: NextRouter,
  array: T[]
): T | undefined => {
  const slug = router.query.slug;
  return array.find((element) => {
    return element.slug === slug;
  });
};
