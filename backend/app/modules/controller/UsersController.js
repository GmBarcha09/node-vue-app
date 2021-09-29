import baseController from "../../utils/baseController";
import { UsersModel } from "../../models/UsersModel";

export class UsersController extends baseController {
  constructor() {
    super();
  }

  createUser = async (req, res) => {
    try {
      const { email, username, password, address, age } = req.body;

      const create = await UsersModel.query().insert({
        email,
        username,
        address,
        age
      });
      if (create) {
        return res.status(this.status.OK).json({
          message: "User added Sucessfully",
          status: 1,
        });
      } else {
        return res.status(this.status.BAD_REQUEST).json({
          message: "Sorry Coudn't add the User",
          status: 0,
        });
      }
    } catch (err) {
      return res.status(this.serverErr).json({
        message: "Something went wrong",
        error: err,
      });
    }
  };

  listUser = async (req, res) => {
    try {
      const user = await UsersModel.query();

      if (user) {
        return res.status(this.status.OK).json({
          message: "Users listed Sucessfully",
          status: 1,
          list: user,
        });
      } else {
        return res.status(this.status.BAD_REQUEST).json({
          message: "Sorry Coudn't list the User",
          status: 0,
        });
      }
    } catch (err) {
      return res.status(this.serverErr).json({
        message: "Something went wrong",
        error: err,
      });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const removeUser = await UsersModel.query().delete().where({ id });
      if (removeUser) {
        return res.status(this.status.OK).json({
          message: "User deleted Sucessfully!",
          status: 1,
        });
      } else {
        return res.status(this.status.BAD_REQUEST).json({
          message: "Sorry Coudn't Delete User, User NotFound",
          status: 0,
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(this.serverErr).json({
        message: "Something went wrong",
        error: err,
      });
    }
  };
}
