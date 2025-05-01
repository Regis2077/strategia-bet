import React from 'react';
import styles from './PartidasTable.module.css';
import type { Partida } from './types';

interface PartidasTableProps {
  partidas: Partida[];
}

const PartidasTable: React.FC<PartidasTableProps> = ({ partidas }) => {
  return (
    <table className={styles["table"]}>
      <thead>
        <tr>
          <th className={styles["table__th"]}>Campeonato</th>
          <th className={styles["table__th"]}>Placar</th>
          <th className={styles["table__th"]}>Mandante</th>
          <th className={styles["table__th"]}>Visitante</th>
          <th className={styles["table__th"]}>Status</th>
          <th className={styles["table__th"]}>Data</th>
        </tr>
      </thead>
      <tbody>
        {partidas.map((partida) => (
          <tr key={partida.partida_id} className={styles["table__row"]}>
            <td className={styles["table__td"]}>{partida.campeonato.nome}</td>
            <td className={styles["table__td"]}>{partida.placar}</td>
            <td className={styles["table__td"]}>
              <img
                src={partida.time_mandante.escudo}
                alt={partida.time_mandante.nome_popular}
                className={styles["table__image"]}
              />
              {partida.time_mandante.sigla}
            </td>
            <td className={styles["table__td"]}>
              <img
                src={partida.time_visitante.escudo}
                alt={partida.time_visitante.nome_popular}
                className={styles["table__image"]}
              />
              {partida.time_visitante.sigla}
            </td>
            <td className={styles["table__td"]}>{partida.status}</td>
            <td className={styles["table__td"]}>{partida.data_realizacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PartidasTable;
