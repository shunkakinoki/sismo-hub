import { Command } from "commander";
import { DataSourcesCmd, GlobalOptions } from "./command";
import {
  LocalAvailableDataStore,
  MemoryAvailableDataStore,
} from "infrastructure/available-data";
import { DynamoDBAvailableDataStore } from "infrastructure/available-data/dynamodb-available-data";
import { LocalFileStore, MemoryFileStore } from "infrastructure/file-store";
import { S3FileStore } from "infrastructure/file-store/s3-file-store";
import { LocalGroupStore, MemoryGroupStore } from "infrastructure/group-store";
import { DyanmoDBGroupStore } from "infrastructure/group-store/dynamodb-group-store";

const createEmptyCommand = (): Command =>
  new DataSourcesCmd("test-cmd").action(() => Promise.resolve());

describe("Test cli command", () => {
  it("should have default to local stores", async () => {
    const testProgram: Command = createEmptyCommand();
    await testProgram.parseAsync(["node", "./data-sources"]);
    expect(testProgram.opts<GlobalOptions>().availableDataStore).toBeInstanceOf(
      LocalAvailableDataStore
    );
    expect(
      testProgram.opts<GlobalOptions>().availableGroupStore
    ).toBeInstanceOf(LocalFileStore);
    expect(testProgram.opts<GlobalOptions>().groupStore).toBeInstanceOf(
      LocalGroupStore
    );
  });

  it("should have memory group store", async () => {
    const testProgram: Command = createEmptyCommand();
    await testProgram.parseAsync([
      "node",
      "./data-sources",
      "--storage-type",
      "memory",
    ]);
    expect(testProgram.opts<GlobalOptions>().availableDataStore).toBeInstanceOf(
      MemoryAvailableDataStore
    );
    expect(
      testProgram.opts<GlobalOptions>().availableGroupStore
    ).toBeInstanceOf(MemoryFileStore);
    expect(testProgram.opts<GlobalOptions>().groupStore).toBeInstanceOf(
      MemoryGroupStore
    );
  });

  it("should have aws group store", async () => {
    const testProgram: Command = createEmptyCommand();
    await testProgram.parseAsync([
      "node",
      "./data-sources",
      "--storage-type",
      "aws",
    ]);
    expect(testProgram.opts<GlobalOptions>().availableDataStore).toBeInstanceOf(
      DynamoDBAvailableDataStore
    );
    expect(
      testProgram.opts<GlobalOptions>().availableGroupStore
    ).toBeInstanceOf(S3FileStore);
    expect(testProgram.opts<GlobalOptions>().groupStore).toBeInstanceOf(
      DyanmoDBGroupStore
    );
  });
});
