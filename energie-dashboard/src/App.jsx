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

  // Aktionsplan - chargement depuis localStorage ou valeurs par défaut
  const [aktionsplan, setAktionsplan] = useState(() => {
    const gespeicherteAktionsplan = localStorage.getItem("aktionsplan");
    return gespeicherteAktionsplan
      ? JSON.parse(gespeicherteAktionsplan)
      : [
          {
            aktion: "Aktionen zum operativen Ziel 1:",
            kommentar: "Bei einem Durchschnitt von 818 Betriebsstunden aus 2019 wäre die Differenz der Anschaffungskosten bei 1710 geleisteten Stunden wieder zurückverdient",
            berechnung: "Diesel: 20709€, Elektro: 23660€, Verbrauch: 2.75L/h vs 6.5kWh/h",
          },
          {
            aktion: "Aktionen zum operativen Ziel 2:",
            kommentar: "Es wurden Angebote für einen Radlader des selben Typen wie der vorhandene, sowie für einen kleineren mit einem geringeren Verbauch eingeholt",
            berechnung: "großer Radlader: 100000€, kleiner: 39900€, Verbrauch: 8.3L/h vs 6.5L/h",
          },
          {
            aktion: "Aktionen zum operativen Ziel 3:",
            kommentar: "Das Lagerhaltungssystem wurde programmiert und kann vollständig genutzt werden.",
            berechnung: "Einsparung pro Betriebsstunde Stapler: 2.9L → 3.19€",
          },
          {
            aktion: "Aktionen zum operativen Ziel 4:",
            kommentar: "Das Thema sollte in den nächsten Jahren weiter verfolgt werden",
            berechnung: "Wird aktuell nicht umgesetzt",
          },
          {
            aktion: "Aktionen zum operativen Ziel 5:",
            kommentar: "An beiden Pressen ist für das Einlagern der fertig gepackten Paletten ein Elektrostapler im Einsatz.",
            berechnung: "Im Jahr 2024 sind 5 von 8 Staplern elektrisch betrieben (79% der Stunden)",
          },
          {
            aktion: "Aktionen zum operativen Ziel 6:",
            kommentar: "Es wurden je eine Baggerwaage bestellt und installiert.",
            berechnung: "Energieverbrauch pro to an Presse 1 von 21.98kwh/to (2022) auf 17.54kwh/to (2024)",
          },
          {
            aktion: "Aktionen zum operativen Ziel 7:",
            kommentar: "Ende 2021 wurden 2 elektrisch betriebene Stapler angeschafft",
            berechnung: "Ziel wurde 2024 nicht komplett erreicht",
          },
          {
            aktion: "Aktionen zum operativen Ziel 8:",
            kommentar: "2022 wurden 2 dieselbetriebene Stapler durch einen Elektrostapler ersetzt",
            berechnung: "Ziel erreicht",
          },
          {
            aktion: "Aktionen zum operativen Ziel 9:",
            kommentar: "Der Verbrauch des mobile Equipment pro verarbeiteter Tonne wurde um 22% gesenkt.",
            berechnung: "Verbrauch pro to: 2020=9.91kwh/to → 2024=7.72kwh/to",
          },
        ];
  });

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("ziele", JSON.stringify(ziele));
    localStorage.setItem("operativeZiele", JSON.stringify(operativeZiele));
    localStorage.setItem("aktionsplan", JSON.stringify(aktionsplan));
  }, [ziele, operativeZiele, aktionsplan]);

  // États pour la nouvelle ligne à ajouter (strategische Ziele)
  const [neuZiel, setNeuZiel] = useState("");
  const [neuFortschritt, setNeuFortschritt] = useState("");

  // États pour la nouvelle ligne à ajouter (operative Ziele)
  const [neuOperativesZiel, setNeuOperativesZiel] = useState("");
  const [neuOperativerFortschritt, setNeuOperativerFortschritt] = useState("");

  // États pour la nouvelle ligne à ajouter (Aktionsplan)
  const [neuAktion, setNeuAktion] = useState("");
  const [neuKommentar, setNeuKommentar] = useState("");
  const [neuBerechnung, setNeuBerechnung] = useState("");

  // État pour l'édition
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingOperativeIndex, setEditingOperativeIndex] = useState(null);
  const [editingAktionsplanIndex, setEditingAktionsplanIndex] = useState(null);
  
  // États temporaires pour modifier la ligne
  const [editZiel, setEditZiel] = useState("");
  const [editFortschritt, setEditFortschritt] = useState("");
  const [editOperativesZiel, setEditOperativesZiel] = useState("");
  const [editOperativerFortschritt, setEditOperativerFortschritt] = useState("");
  const [editAktion, setEditAktion] = useState("");
  const [editKommentar, setEditKommentar] = useState("");
  const [editBerechnung, setEditBerechnung] = useState("");
  // Ajoute ces états avec les autres useState
const [energieziel, setEnergieziel] = useState(() => {
  const gespeichert = localStorage.getItem("energieziel");
  return gespeichert || "Übergeordnetes Energieziel für Aktionsplan 2020-2024\n\nVerbesserung des Gesamtenergieverbrauches pro verarbeiteter Tonne um 20% bis 2024";
});

const [bewertung, setBewertung] = useState(() => {
  const gespeichert = localStorage.getItem("bewertung");
  return gespeichert || `Bewertung der Kennzahlen\n\nAuf Grund der Inbetriebnahme des Palettierroboters an Presse 1 ist der Energieverbrauch pro Tonne im Jahr 2022 angestiegen.\nVor allem in der ersten Phase des Aufbaus wurde Energie verbaucht, aber fast nichts gepresst.\n\nIm Jahr 2023 wird diese Kennzahl eine positvere Entwicklung aufweisen\n\nDer Energieverbrauch pro Betriebsstunde konnte für jeweiligen Bagger der Presse 1 und 2 in den Jahren 2021 und 2022 verbessert werden.\nIm Jahr 2024 wurde der spezifische Energieverbrauch für Presse 1 gesenkt\n\n\n\n\n\nGeprüft. Aktuell zurückgestellt`;
});

// Ajoute ces effets pour sauvegarder
useEffect(() => {
  localStorage.setItem("energieziel", energieziel);
  localStorage.setItem("bewertung", bewertung);
}, [energieziel, bewertung]);

// États pour l'édition
const [editingEnergieziel, setEditingEnergieziel] = useState(false);
const [editingBewertung, setEditingBewertung] = useState(false);
const [tempEnergieziel, setTempEnergieziel] = useState("");
const [tempBewertung, setTempBewertung] = useState("");

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

  // Ajout d'un nouvel item d'aktionsplan
  function addAktionsplan(e) {
    e.preventDefault();
    if (!neuAktion || !neuKommentar || !neuBerechnung)
      return alert("Bitte alle Felder ausfüllen");

    setAktionsplan([
      ...aktionsplan,
      { 
        aktion: neuAktion,
        kommentar: neuKommentar,
        berechnung: neuBerechnung
      },
    ]);
    setNeuAktion("");
    setNeuKommentar("");
    setNeuBerechnung("");
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

  // Supprimer une ligne d'aktionsplan
  function deleteAktionsplan(index) {
    if (window.confirm("Möchten Sie diesen Aktionsplan-Eintrag wirklich löschen?")) {
      setAktionsplan(aktionsplan.filter((_, i) => i !== index));
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

  // Commencer à éditer une ligne d'aktionsplan
  function startAktionsplanEdit(index) {
    setEditingAktionsplanIndex(index);
    setEditAktion(aktionsplan[index].aktion);
    setEditKommentar(aktionsplan[index].kommentar);
    setEditBerechnung(aktionsplan[index].berechnung);
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

  function cancelAktionsplanEdit() {
    setEditingAktionsplanIndex(null);
    setEditAktion("");
    setEditKommentar("");
    setEditBerechnung("");
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

  // Enregistrer la modification d'aktionsplan
  function saveAktionsplanEdit(index) {
    if (!editAktion || !editKommentar || !editBerechnung) {
      alert("Bitte alle Felder ausfüllen");
      return;
    }
    const neueAktionsplan = [...aktionsplan];
    neueAktionsplan[index] = {
      aktion: editAktion,
      kommentar: editKommentar,
      berechnung: editBerechnung
    };
    setAktionsplan(neueAktionsplan);
    cancelAktionsplanEdit();
  }

  const getFortschrittIcon = (percent) => {
    const num = parseInt(percent);
    if (num === 100) return "✅";
    if (num >= 50) return "⚠️";
    return "❌";
  };

  const getProgressBarColor = (percent) => {
    const num = parseInt(percent);
    if (num === 100) return "#28a745";
    if (num >= 50) return "#ffc107";
    return "#dc3545";
  };
// Ajoute avec les autres fonctions
function startEditEnergieziel() {
  setTempEnergieziel(energieziel);
  setEditingEnergieziel(true);
}

function saveEnergieziel() {
  setEnergieziel(tempEnergieziel);
  setEditingEnergieziel(false);
}

function cancelEditEnergieziel() {
  setEditingEnergieziel(false);
}

function startEditBewertung() {
  setTempBewertung(bewertung);
  setEditingBewertung(true);
}

function saveBewertung() {
  setBewertung(tempBewertung);
  setEditingBewertung(false);
}

function cancelEditBewertung() {
  setEditingBewertung(false);
}
 const styles = {
  container: {
    padding: 20,
    maxWidth: 850, 
    margin: "auto",
    marginLeft: "120px", 
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
      whiteSpace: "nowrap",
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
      display: "flex",
      gap: "8px",
      justifyContent: "center",
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
      <h2  style={styles.sectionTitle}> Strategische Ziele & Fortschritt</h2>

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

      <h2 style={styles.sectionTitle}>Operative Ziele 2020- ...</h2>

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

      <h2 style={styles.sectionTitle}>Aktionsplan zur Erreichung der operativen Ziele</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Aktion</th>
            <th style={styles.th}>Kommentare zur Umsetzung</th>
            <th style={styles.th}>Berechnung</th>
            <th style={styles.th}>Aktionen</th>
            <th style={styles.th}>Auswertung</th>
          </tr>
        </thead>
        <tbody>
          {aktionsplan.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td style={styles.td}>
                  {editingAktionsplanIndex === index ? (
                    <textarea
                      style={styles.inputEdit}
                      value={editAktion}
                      onChange={(e) => setEditAktion(e.target.value)}
                      rows={3}
                    />
                  ) : (
                    item.aktion
                  )}
                </td>
                <td style={styles.td}>
                  {editingAktionsplanIndex === index ? (
                    <textarea
                      style={styles.inputEdit}
                      value={editKommentar}
                      onChange={(e) => setEditKommentar(e.target.value)}
                      rows={3}
                    />
                  ) : (
                    item.kommentar
                  )}
                </td>
                <td style={styles.td}>
                  {editingAktionsplanIndex === index ? (
                    <textarea
                      style={styles.inputEdit}
                      value={editBerechnung}
                      onChange={(e) => setEditBerechnung(e.target.value)}
                      rows={3}
                    />
                  ) : (
                    item.berechnung
                  )}
                </td>
                <td style={styles.actionCell}>
                  {editingAktionsplanIndex === index ? (
                    <>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.saveButton }}
                        onClick={() => saveAktionsplanEdit(index)}
                      >
                        Speichern
                      </button>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.cancelButton }}
                        onClick={cancelAktionsplanEdit}
                      >
                        Abbrechen
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.editButton }}
                        onClick={() => startAktionsplanEdit(index)}
                      >
                        Bearbeiten
                      </button>
                      <button
                        style={{ ...styles.buttonSmall, ...styles.deleteButton }}
                        onClick={() => deleteAktionsplan(index)}
                      >
                        Löschen
                      </button>
                    </>
                  )}
                </td>
                <td style={styles.td}>
                  {index === 0 ? (
                    <>
                      Siehe Reiter{" "}
                      <a
                        href="/auswertung"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Auswertung AP 20-24
                      </a>
                    </>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <form onSubmit={addAktionsplan} style={styles.form}>
        <label style={styles.label} htmlFor="neuAktion">
          Neue Aktion:
        </label>
        <textarea
          id="neuAktion"
          style={styles.textarea}
          value={neuAktion}
          onChange={(e) => setNeuAktion(e.target.value)}
          required
          rows={2}
          placeholder="Neue Aktion eingeben (z.B. 'Aktionen zum operativen Ziel X:')"
        />

        <label style={styles.label} htmlFor="neuKommentar">
          Kommentare zur Umsetzung:
        </label>
        <textarea
          id="neuKommentar"
          style={styles.textarea}
          value={neuKommentar}
          onChange={(e) => setNeuKommentar(e.target.value)}
          required
          rows={3}
          placeholder="Kommentare zur Umsetzung eingeben"
        />

        <label style={styles.label} htmlFor="neuBerechnung">
          Berechnung:
        </label>
        <textarea
          id="neuBerechnung"
          style={styles.textarea}
          value={neuBerechnung}
          onChange={(e) => setNeuBerechnung(e.target.value)}
          required
          rows={3}
          placeholder="Berechnungen oder Kennzahlen eingeben"
        />

        <button type="submit" style={styles.button}>
          Aktionsplan-Eintrag hinzufügen
        </button>
      </form>

      {/* Ajoute ces sections avant ou après tes autres sections */}

<h2 style={styles.sectionTitle}>Übergeordnetes Energieziel für Aktionsplan 2020- ...</h2>
<div style={{ 
  backgroundColor: "#f9f9f9", 
  padding: 20, 
  borderRadius: 8,
  marginBottom: 30,
  position: "relative"
}}>
  {editingEnergieziel ? (
    <>
      <textarea
        style={{ 
          ...styles.textarea,
          minHeight: 100,
          width: "100%",
          marginBottom: 10
        }}
        value={tempEnergieziel}
        onChange={(e) => setTempEnergieziel(e.target.value)}
      />
      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{ ...styles.buttonSmall, ...styles.saveButton }}
          onClick={saveEnergieziel}
        >
          Speichern
        </button>
        <button
          style={{ ...styles.buttonSmall, ...styles.cancelButton }}
          onClick={cancelEditEnergieziel}
        >
          Abbrechen
        </button>
      </div>
    </>
  ) : (
    <>
      <pre style={{ 
        whiteSpace: "pre-wrap", 
        fontFamily: "inherit",
        margin: 0
      }}>{energieziel}</pre>
      <button
        style={{ 
          ...styles.buttonSmall, 
          ...styles.editButton,
          position: "absolute",
          top: 10,
          right: 10
        }}
        onClick={startEditEnergieziel}
      >
        Bearbeiten
      </button>
    </>
  )}
</div>

<h2 style={styles.sectionTitle}>Bewertung der Kennzahlen</h2>
<div style={{ 
  backgroundColor: "#f9f9f9", 
  padding: 20, 
  borderRadius: 8,
  marginBottom: 30,
  position: "relative"
}}>
  {editingBewertung ? (
    <>
      <textarea
        style={{ 
          ...styles.textarea,
          minHeight: 200,
          width: "100%",
          marginBottom: 10
        }}
        value={tempBewertung}
        onChange={(e) => setTempBewertung(e.target.value)}
      />
      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{ ...styles.buttonSmall, ...styles.saveButton }}
          onClick={saveBewertung}
        >
          Speichern
        </button>
        <button
          style={{ ...styles.buttonSmall, ...styles.cancelButton }}
          onClick={cancelEditBewertung}
        >
          Abbrechen
        </button>
      </div>
    </>
  ) : (
    <>
      <pre style={{ 
        whiteSpace: "pre-wrap", 
        fontFamily: "inherit",
        margin: 0
      }}>{bewertung}</pre>
      <button
        style={{ 
          ...styles.buttonSmall, 
          ...styles.editButton,
          position: "absolute",
          top: 10,
          right: 10
        }}
        onClick={startEditBewertung}
      >
        Bearbeiten
      </button>
    </>
  )}
</div>
    </div>
  );
}