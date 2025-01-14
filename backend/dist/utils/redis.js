import { config } from "dotenv";
import { Redis } from "ioredis";
config();
const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASS,
});
redisClient.on("connect", () => {
    console.log("Connected to Redis");
});
redisClient.on("error", (err) => {
    console.error("Redis connection error:", err);
});
export default redisClient;
