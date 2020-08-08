import { Resolvers } from "src/types/resolvers";
import User from "../../../entities/User";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    ToggleDrivingMode: privateResolver(async (_, __, { req }) => {
      const user: User = req.user;
      user.isDriving = !user.isDriving;
      await User.update({ id: user.id }, { isDriving: user.isDriving });
      return {
        ok: true,
        error: null,
      };
    }),
  },
};

export default resolvers;
