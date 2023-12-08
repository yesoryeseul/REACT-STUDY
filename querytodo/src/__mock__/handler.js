import { setupWorker } from "msw";
import * as TodoApi from "./apis/todo.api";

const handler = [...Object.values(TodoApi)];

export const worker = setupWorker(...handler);
