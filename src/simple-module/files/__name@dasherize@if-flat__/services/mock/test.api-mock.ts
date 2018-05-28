import { TestApiModel } from "../api/test";
import { TestModel } from "../../models";

export const TestApiMock: TestApiModel.Response = {
	Result: new TestModel()
};