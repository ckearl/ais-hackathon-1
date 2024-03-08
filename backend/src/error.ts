import express from "express";
import { TErrorRes } from "../BackendTypes/res";

const errors = {
  duplicateScan: {
    status: "failed",
    errorCode: "duplicateScan",
    message: "Duplicate scan.",
    log: "duplicate scan attempted",
  },
  unknownError: {
    status: "failed",
    errorCode: "unknownError",
    message: "Unknown error. Please try again.",
    log: "unknown error occurred",
  },
  noScans: {
    status: "failed",
    errorCode: "noScans",
    message: "No scans found.",
    log: "no scans found",
  },
  noUser: {
    status: "failed",
    errorCode: "noUser",
    message: "No user found.",
    log: "no user found",
  },
  insufficientData: {
    status: "failed",
    errorCode: "insufficientData",
    message: "Insufficient data.",
    log: "insufficient data",
  },
} as const satisfies { [key: string]: TErrorRes };

type TValidErrors = keyof typeof errors;

export default function SendError(res: express.Response, error: TValidErrors) {
  res.send(errors[error]);
  console.log(errors[error].log);
}
