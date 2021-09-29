import httpCodes from "http-codes";

export default class {
  status;
  ok;
  badRequest;
  serverErr;
  constructor() {
    this.status = httpCodes;
    this.ok = httpCodes.OK;
    this.badRequest = httpCodes.BAD_REQUEST;
    this.serverErr = httpCodes.INTERNAL_SERVER_ERROR;
  }

  sendServerError = (res, errr) => {
    const err = {
      status: 0,
      message: "Something went wrong no our side.",
      errors: ["Please check logs"],
      code: this.serverErr,
    };

    return res.status(this.serverErr).json({
      error: err,
      message: errr.mesmessagesage,
    });


  };

}
