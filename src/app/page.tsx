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
import React from "react";

type MyValue = {
  id: number;
  name: string;
  value: number;
  group: string;
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const v: MyValue[] = [
    { id: 1, name: "John", value: 45, group: "A" },
    { id: 2, name: "Sarah", value: 72, group: "B" },
    { id: 3, name: "David", value: 17, group: "A" },
    { id: 4, name: "Emily", value: 94, group: "C" },
    { id: 5, name: "Michael", value: 28, group: "B" },
    { id: 6, name: "Jessica", value: 62, group: "C" },
    { id: 7, name: "Andrew", value: 39, group: "A" },
    { id: 8, name: "Grace", value: 81, group: "B" },
    { id: 9, name: "Anthony", value: 12, group: "A" },
    { id: 10, name: "Rachel", value: 76, group: "C" },
    { id: 11, name: "Thomas", value: 55, group: "B" },
    { id: 12, name: "Olivia", value: 89, group: "A" },
    { id: 13, name: "Daniel", value: 33, group: "C" },
    { id: 14, name: "Madison", value: 70, group: "B" },
    { id: 15, name: "Nicholas", value: 25, group: "A" },
    { id: 16, name: "Lauren", value: 60, group: "C" },
    { id: 17, name: "Christopher", value: 47, group: "B" },
    { id: 18, name: "Ava", value: 97, group: "A" },
    { id: 19, name: "Tyler", value: 20, group: "C" },
    { id: 20, name: "Sophia", value: 84, group: "B" },
  ];

  const limit = 10;
  const [rows, setRows] = React.useState<MyValue[]>(v.slice(0, limit));

  const handleChange = (page: number) => {
    const start = limit * page;
    const end = start + limit;
    setRows(v.slice(start, end));
  };

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
              handleChange(0);
            }}
          >
            First
          </Button>
          <Button
            variant="text"
            onClick={() => {
              handleChange(1);
            }}
          >
            Second
          </Button>
        </div>
      </div>
    </main>
  );
}
