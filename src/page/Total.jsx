import React, { useContext } from "react";
import { KeranjangContext } from "../App";

export default function Total() {
  const total = useContext(KeranjangContext);
  return (
    <div>
        <h1>Lanjutan.......</h1>
      <p>Jumlah Barang : {total.value.jumlah}</p>{" "}
      <p>Total : {total.value.total}</p>
    </div>
  );
}
