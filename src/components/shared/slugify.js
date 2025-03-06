// utils/slugify.js
import slugify from "slugify";

const createSlug = (title) => slugify(title, { lower: true, strict: true });

export default createSlug;
