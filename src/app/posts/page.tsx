import { getLogger } from "@/app/common/utils/logger";

export default function Posts() {
  const logger = getLogger("home");

  logger.info("This is home page");

  return <div>Hello World</div>;
}
