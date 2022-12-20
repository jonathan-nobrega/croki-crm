import { getAllClients } from "../services/clients.service";


describe("Clients tests", () => {
  test("Get all clients", async () => {
    await getAllClients()
        .then((result) => {
          console.log(result);
          expect(result).toBe(true);
        });
  });

  test("Get a client", async () => {
    // should read a random client from db
  });

  test("Update a client", async () => {
    // should update a random client
  });

  test("Delete a client", async () => {
    // should delete a client
  });
});
