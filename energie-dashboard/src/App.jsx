import React, { useState, useEffect } from "react";

export default function App() {
  // Charger depuis localStorage ou valeur par défaut
  const [ziele, setZiele] = useState(() => {
    const gespeicherteZiele = localStorage.getItem("ziele");
    return gespeicherteZiele
      ? JSON.parse(gespeicherteZiele)
      : [
          {
            strategischesZiel:
              "Nachhaltige und kontinuierliche Bewusstseinsschaffung zum Thema Energie sowie Verbesserung des Energieverbrauchs und der Energieeffizienz um 10% bis 2021.",
            fortschritt: "100%",
          },
          {
            strategischesZiel:
              "Verbesserung des spezifischen Gesamtenergieverbrauchs (Strom, Gas, Diesel) pro verarbeiteter Tonne um 20% senken bis 2024 auf Basis von 2020",
            fortschritt: "70%",
          },
          {
            strategischesZiel: "Langfristig CO2 neutraler Betrieb der UBC-Aufbereitung",
            fortschritt: "100%",
          },
          {
            strategischesZiel:
              "Langfristige Minimierung der innerbetrieblichen Fahrwege durch Optimierung der Logistikprozesse",
            fortschritt: "60%",
          },
          {
            strategischesZiel:
              "Langfristige kontinuierliche Erhöhung der Maschinenstunden elektrisch betriebener Maschinen an den Gesamtstunden (nur Baumaschinen)",
            fortschritt: "50%",
          },
        ];
  });

  // Operative Ziele - chargement depuis localStorage ou valeurs par défaut
  const [operativeZiele, setOperativeZiele] = useState(() => {
    const gespeicherteOperativeZiele = localStorage.getItem("operativeZiele");
    return gespeicherteOperativeZiele
      ? JSON.parse(gespeicherteOperativeZiele)
      : [
          {
            operativesZiel:
              "Operatives Ziel 1: Anschaffung eines elektronisch betriebenen Gabelstaplers anstatt eines Diesel betriebenen für den Arbeitsbereich an der Presse II",
            fortschritt: "100%",
          },
          {
            operativesZiel:
              "Operatives Ziel 2: Bei der Anschaffung eines neuen Radladers auf eine kleinere Version zurückgreifen, die weniger Energie verbraucht",
            fortschritt: "100%",
          },
          {
            operativesZiel:
              "Operatives Ziel 3: durch die Einführung eines Lagerhaltungssystems, unnötiges 'Umfahren' der Paletten reduzieren",
            fortschritt: "100%",
          },
          {
            operativesZiel:
              "Operatives Ziel 4: Überprüfung der Möglichkeiten alternativer Energienutzung durch Photovoltaik oder Blockheizkraftwerk",
            fortschritt: "10%",
          },
          {
            operativesZiel:
              "Operatives Ziel 5: Anschaffung elektrisch betriebener Stapler anstatt dieselbetriebener",
            fortschritt: "100%",
          },
          {
            operativesZiel:
              "Operatives Ziel 6: Anschaffung einer Baggerwaage zur Befüllung der Pressen (zu strategischem Ziel 1)",
            fortschritt: "100%",
          },
          {
            operativesZiel:
              "Operatives Ziel 7: Verbesserung des spezifischen Gesamtenergieverbrauchs pro verarbeiteter Tonne um 20% auf Basis von 2020",
            fortschritt: "80%",
          },
          {
            operativesZiel:
              "Operatives Ziel 8: Erhöhung des Anteils der Betriebsstunden der Elektromaschinen (Stapler + Baumaschinen) auf über 30%. Basis 2020: 17,16%",
            fortschritt: "100%",
          },
          {
            operativesZiel:
              "Operatives Ziel 9: Verringerung des spezifischen Energieverbrauchs der SEUs bis 2024 um 10%",
            fortschritt: "0%",
          },
        ];
  });

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("ziele", JSON.stringify(ziele));
    localStorage.setItem("operativeZiele", JSON.stringify(operativeZiele));
  }, [ziele, operativeZiele]);

  // États pour la nouvelle ligne à ajouter (strategische Ziele)
  const [neuZiel, setNeuZiel] = useState("");
  const [neuFortschritt, setNeuFortschritt] = useState("");

  // États pour la nouvelle ligne à ajouter (operative Ziele)
  const [neuOperativesZiel, setNeuOperativesZiel] = useState("");
  const [neuOperativerFortschritt, setNeuOperativerFortschritt] = useState("");

  // État pour l'édition : index de la ligne en édition, sinon null
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingOperativeIndex, setEditingOperativeIndex] = useState(null);
  // États temporaires pour modifier la ligne
  const [editZiel, setEditZiel] = useState("");
  const [editFortschritt, setEditFortschritt] = useState("");
  const [editOperativesZiel, setEditOperativesZiel] = useState("");
  const [editOperativerFortschritt, setEditOperativerFortschritt] = useState("");

  // Ajout d'un nouvel objectif stratégique
  function addZiel(e) {
    e.preventDefault();
    if (!neuZiel || !neuFortschritt)
      return alert("Bitte Ziel und Fortschritt eingeben");
    if (neuFortschritt < 0 || neuFortschritt > 100)
      return alert("Fortschritt muss zwischen 0 und 100 sein");

    setZiele([
      ...ziele,
      { strategischesZiel: neuZiel, fortschritt: neuFortschritt + "%" },
    ]);
    setNeuZiel("");
    setNeuFortschritt("");
  }

  // Ajout d'un nouvel objectif opératif
  function addOperativesZiel(e) {
    e.preventDefault();
    if (!neuOperativesZiel || !neuOperativerFortschritt)
      return alert("Bitte Ziel und Fortschritt eingeben");
    if (neuOperativerFortschritt < 0 || neuOperativerFortschritt > 100)
      return alert("Fortschritt muss zwischen 0 und 100 sein");

    // Ajoute automatiquement "Operatives Ziel X:" si ce n'est pas déjà présent
    const formattedZiel = neuOperativesZiel.startsWith("Operatives Ziel")
      ? neuOperativesZiel
      : `Operatives Ziel ${operativeZiele.length + 1}: ${neuOperativesZiel}`;

    setOperativeZiele([
      ...operativeZiele,
      { operativesZiel: formattedZiel, fortschritt: neuOperativerFortschritt + "%" },
    ]);
    setNeuOperativesZiel("");
    setNeuOperativerFortschritt("");
  }

  // Supprimer une ligne stratégique
  function deleteZiel(index) {
    if (window.confirm("Möchten Sie dieses Ziel wirklich löschen?")) {
      setZiele(ziele.filter((_, i) => i !== index));
    }
  }

  // Supprimer une ligne opérative
  function deleteOperativesZiel(index) {
    if (window.confirm("Möchten Sie dieses operative Ziel wirklich löschen?")) {
      setOperativeZiele(operativeZiele.filter((_, i) => i !== index));
    }
  }

  // Commencer à éditer une ligne stratégique
  function startEdit(index) {
    setEditingIndex(index);
    setEditZiel(ziele[index].strategischesZiel);
    setEditFortschritt(parseInt(ziele[index].fortschritt));
  }

  // Commencer à éditer une ligne opérative
  function startOperativeEdit(index) {
    setEditingOperativeIndex(index);
    setEditOperativesZiel(operativeZiele[index].operativesZiel);
    setEditOperativerFortschritt(parseInt(operativeZiele[index].fortschritt));
  }

  // Annuler l'édition
  function cancelEdit() {
    setEditingIndex(null);
    setEditZiel("");
    setEditFortschritt("");
  }

  function cancelOperativeEdit() {
    setEditingOperativeIndex(null);
    setEditOperativesZiel("");
    setEditOperativerFortschritt("");
  }

  // Enregistrer la modification stratégique
  function saveEdit(index) {
    if (!editZiel || editFortschritt === "") {
      alert("Bitte Ziel und Fortschritt eingeben");
      return;
    }
    if (editFortschritt < 0 || editFortschritt > 100) {
      alert("Fortschritt muss zwischen 0 und 100 sein");
      return;
    }
    const neueZiele = [...ziele];
    neueZiele[index] = {
      strategischesZiel: editZiel,
      fortschritt: editFortschritt + "%",
    };
    setZiele(neueZiele);
    cancelEdit();
  }

  // Enregistrer la modification opérative
  function saveOperativeEdit(index) {
    if (!editOperativesZiel || editOperativerFortschritt === "") {
      alert("Bitte Ziel und Fortschritt eingeben");
      return;
    }
    if (editOperativerFortschritt < 0 || editOperativerFortschritt > 100) {
      alert("Fortschritt muss zwischen 0 und 100 sein");
      return;
    }
    const neueOperativeZiele = [...operativeZiele];
    neueOperativeZiele[index] = {
      operativesZiel: editOperativesZiel,
      fortschritt: editOperativerFortschritt + "%",
    };
    setOperativeZiele(neueOperativeZiele);
    cancelOperativeEdit();
  }

  const getFortschrittIcon = (percent) => {
    const num = parseInt(percent);
    if (num === 100) return "✅";
    if (num >= 50) return "⚠️";
    return "❌";
  };

  const getProgressBarColor = (percent) => {
    const num = parseInt(percent);
    if (num === 100) return "#28a745"; // vert
    if (num >= 50) return "#ffc107"; // jaune/orange
    return "#dc3545"; // rouge
  };

  const styles = {
    container: {
      padding: 20,
      maxWidth: 900,
      margin: "auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#003366",
    },
    table: {
      borderCollapse: "collapse",
      width: "100%",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      marginTop: 20,
    },
    th: {
      backgroundColor: "#fff",
      color: "#003366",
      border: "1px solid #ddd",
      padding: "12px 15px",
      textAlign: "left",
      fontWeight: "600",
      fontSize: 16,
      userSelect: "none",
    },
    td: {
      border: "1px solid #ddd",
      padding: "12px 15px",
      color: "#003366",
      backgroundColor: "#cce4ff",
      verticalAlign: "top",
    },
    form: {
      marginTop: 40,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      backgroundColor: "#f9f9f9",
      padding: 20,
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    label: {
      fontWeight: "600",
      marginBottom: 6,
      color: "#003366",
      display: "block",
    },
    textarea: {
      width: "100%",
      minHeight: 60,
      padding: 10,
      fontSize: 14,
      borderRadius: 6,
      border: "1.5px solid #ccc",
      resize: "vertical",
      fontFamily: "inherit",
      color: "#003366",
    },
    inputNumber: {
      width: 100,
      padding: 10,
      fontSize: 14,
      borderRadius: 6,
      border: "1.5px solid #ccc",
      fontFamily: "inherit",
      color: "#003366",
    },
    button: {
      width: 160,
      padding: "10px 0",
      fontSize: 16,
      borderRadius: 6,
      border: "none",
      backgroundColor: "#0059b3",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "700",
      transition: "background-color 0.3s ease",
      marginRight: 10,
    },
    buttonSmall: {
      padding: "6px 12px",
      fontSize: 14,
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      marginRight: 8,
    },
    editButton: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    saveButton: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    cancelButton: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    deleteButton: {
      backgroundColor: "#dc3545",
      color: "#fff",
    },
    inputEdit: {
      width: "100%",
      padding: 8,
      fontSize: 14,
      borderRadius: 6,
      border: "1.5px solid #ccc",
      fontFamily: "inherit",
      color: "#003366",
    },
    progressCell: {
      verticalAlign: "middle",
      width: 180,
      textAlign: "left",
    },
    actionCell: {
      backgroundColor: "#eef6ff",
      padding: "10px 15px",
      textAlign: "center",
      border: "1px solid #ddd",
    },
    sectionTitle: {
      marginTop: 40,
      marginBottom: 20,
      color: "#003366",
      borderBottom: "2px solid #0059b3",
      paddingBottom: 10,
    },
  };

  return (
    <div style={styles.container}>
      <h1>Strategische Ziele & Fortschritt</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Strategisches Ziel</th>
            <th style={styles.th}>Fortschritt</th>
            <th style={styles.th}>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {ziele.map((ziel, index) => (
            <React.Fragment key={index}>
              <tr>
                <td style={styles.td}>
                  {editingIndex === index ? (
                    <textarea
                      style={styles.inputEdit}
                      value={editZiel}
                      onChange={(e) => setEditZiel(e.target.value)}
                      rows={3}
                    />
                  ) : (
                    ziel.strategischesZiel
                  )}
                </td>
                <td style={{ ...styles.td, ...styles.progressCell }}>
                  {editingIndex === index ? (
                    <input
                      type="number"
                      min="0"
                      max="100"
                      style={styles.inputEdit}
                      value={editFortschritt}
                      onChange={(e) =>
                        setEditFortschritt(e.target.value.replace(/\D/, ""))
                      }
                    />
                  ) : (
                    <>
                      <span>{ziel.fortschritt}</span>{" "}
                      <span>{getFortschrittIcon(ziel.fortschritt)}</span>
                      <div
                        style={{
                          height: 12,
                          borderRadius: 6,
                          backgroundColor: "#ddd",
                          marginTop: 6,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: ziel.fortschritt,
                            backgroundColor: getProgressBarColor(ziel.fortschritt),
                            height: "100%",
                          }}
                        />
                      </div>
                    </>
                  )}
                </td>
                <td style={styles.actionCell}>
                  {editingIndex === index ? (
                    <>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.saveButton }}
                        onClick={() => saveEdit(index)}
                      >
                        Speichern
                      </button>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.cancelButton }}
                        onClick={cancelEdit}
                      >
                        Abbrechen
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.editButton }}
                        onClick={() => startEdit(index)}
                      >
                        Bearbeiten
                      </button>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.deleteButton }}
                        onClick={() => deleteZiel(index)}
                      >
                        Löschen
                      </button>
                    </>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <form onSubmit={addZiel} style={styles.form}>
        <label style={styles.label} htmlFor="neuZiel">
          Neues strategisches Ziel:
        </label>
        <textarea
          id="neuZiel"
          style={styles.textarea}
          value={neuZiel}
          onChange={(e) => setNeuZiel(e.target.value)}
          required
          rows={3}
          placeholder="Neues Ziel eingeben..."
        />

        <label style={styles.label} htmlFor="neuFortschritt">
          Fortschritt (%):
        </label>
        <input
          id="neuFortschritt"
          type="number"
          min="0"
          max="100"
          style={styles.inputNumber}
          value={neuFortschritt}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || (/^\d+$/.test(val) && +val <= 100)) {
              setNeuFortschritt(val);
            }
          }}
          required
          placeholder="0-100"
        />

        <button type="submit" style={styles.button}>
          Ziel hinzufügen
        </button>
      </form>

      <h2 style={styles.sectionTitle}>Operative Ziele 2020-2024</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Operatives Ziel</th>
            <th style={styles.th}>Fortschritt</th>
            <th style={styles.th}>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {operativeZiele.map((ziel, index) => (
            <React.Fragment key={index}>
              <tr>
                <td style={styles.td}>
                  {editingOperativeIndex === index ? (
                    <textarea
                      style={styles.inputEdit}
                      value={editOperativesZiel}
                      onChange={(e) => setEditOperativesZiel(e.target.value)}
                      rows={3}
                    />
                  ) : (
                    ziel.operativesZiel
                  )}
                </td>
                <td style={{ ...styles.td, ...styles.progressCell }}>
                  {editingOperativeIndex === index ? (
                    <input
                      type="number"
                      min="0"
                      max="100"
                      style={styles.inputEdit}
                      value={editOperativerFortschritt}
                      onChange={(e) =>
                        setEditOperativerFortschritt(e.target.value.replace(/\D/, ""))
                      }
                    />
                  ) : (
                    <>
                      <span>{ziel.fortschritt}</span>{" "}
                      <span>{getFortschrittIcon(ziel.fortschritt)}</span>
                      <div
                        style={{
                          height: 12,
                          borderRadius: 6,
                          backgroundColor: "#ddd",
                          marginTop: 6,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: ziel.fortschritt,
                            backgroundColor: getProgressBarColor(ziel.fortschritt),
                            height: "100%",
                          }}
                        />
                      </div>
                    </>
                  )}
                </td>
                <td style={styles.actionCell}>
                  {editingOperativeIndex === index ? (
                    <>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.saveButton }}
                        onClick={() => saveOperativeEdit(index)}
                      >
                        Speichern
                      </button>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.cancelButton }}
                        onClick={cancelOperativeEdit}
                      >
                        Abbrechen
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.editButton }}
                        onClick={() => startOperativeEdit(index)}
                      >
                        Bearbeiten
                      </button>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.deleteButton }}
                        onClick={() => deleteOperativesZiel(index)}
                      >
                        Löschen
                      </button>
                    </>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <form onSubmit={addOperativesZiel} style={styles.form}>
        <label style={styles.label} htmlFor="neuOperativesZiel">
          Neues operatives Ziel:
        </label>
        <textarea
          id="neuOperativesZiel"
          style={styles.textarea}
          value={neuOperativesZiel}
          onChange={(e) => setNeuOperativesZiel(e.target.value)}
          required
          rows={3}
          placeholder="Neues operatives Ziel eingeben (ohne 'Operatives Ziel X:')"
        />

        <label style={styles.label} htmlFor="neuOperativerFortschritt">
          Fortschritt (%):
        </label>
        <input
          id="neuOperativerFortschritt"
          type="number"
          min="0"
          max="100"
          style={styles.inputNumber}
          value={neuOperativerFortschritt}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || (/^\d+$/.test(val) && +val <= 100)) {
              setNeuOperativerFortschritt(val);
            }
          }}
          required
          placeholder="0-100"
        />

        <button type="submit" style={styles.button}>
          Operatives Ziel hinzufügen
        </button>
      </form>
    </div>
  );
}