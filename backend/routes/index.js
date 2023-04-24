import authRoutes from "./auth.js";
import userRoutes from "./users.js";
import postRoutes from "./posts.js";

function route(app) {
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/posts", postRoutes);
}

export default route;
