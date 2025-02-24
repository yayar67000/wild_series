import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into program (title, synopsis, poster, country, year) values (?, ?, ?, ?, ?)",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
      ],
    );
    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from program where id = ?",
      [id],
    );

    return rows[0] as Program;
  }
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "programs" table
    const [rows] = await databaseClient.query<Rows>("select * from program");

    // Return the array of categories
    return rows as Program[];
  }

  async update(program: Program) {
    const [result] = await databaseClient.query<Result>(
      "update program set title = ?, synopsis = ?, poster = ?, country = ?, year = ? where id = ?",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from program where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new ProgramRepository();
