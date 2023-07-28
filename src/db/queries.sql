WITH RECURSIVE category_hierarchy AS (
  SELECT
    `id`,
    name,
    parent_id
  FROM
    categories
  WHERE
    parent_id IS NULL
  UNION
  ALL
  SELECT
    c.id,
    c.name,
    c.parent_id
  FROM
    categories c
    INNER JOIN category_hierarchy ON c.parent_id = category_hierarchy.id
)
SELECT
  *
FROM
  category_hierarchy;