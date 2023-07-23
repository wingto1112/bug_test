"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";

type MyValue = {
  id: number;
  name: string;
  value: number;
  group: string;
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [rows, setRows] = React.useState<MyValue[]>([]);

  const handleChange = (page: number) => {
    updateRows(page)
  };

  const updateRows = async (page: number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/member?_page=${page}&_limit=10`,
        {
          method: 'GET',
        }
      );
      const members = await res.json();
      setRows(members);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updateRows(1)
  }, [])

  return (
    <main className={styles.main}>
      <div>
        <div>
          {rows && (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableBody>
                  {rows.map((row: MyValue) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="text"
            onClick={() => {
              handleChange(1);
            }}
          >
            First
          </Button>
          <Button
            variant="text"
            onClick={() => {
              handleChange(2);
            }}
          >
            Second
          </Button>
        </div>
      </div>
    </main>
  );
}
