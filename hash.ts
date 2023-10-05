import { MD5, SHA256 } from "bun";

const md5 = (str: string) => new MD5().update(str).digest("hex");
const sha256 = (str: string) => new SHA256().update(str).digest("hex");

export { md5, sha256 };
