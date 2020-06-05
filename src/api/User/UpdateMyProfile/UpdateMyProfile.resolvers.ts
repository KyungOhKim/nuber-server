import { Resolvers } from "src/types/resolvers";
import User from "../../../entities/User";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(async (_, args, { req }) => {
      const user: User = req.user;
      const notNull = {};
      Object.keys(args).forEach((key) => {
        if (args[key] !== null) {
          notNull[key] = args[key];
        }
      });
      try {
        await User.update({ id: user.id }, { ...notNull });
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    }),
  },
};

export default resolvers;
