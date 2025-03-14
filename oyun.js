const questions = [
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten uns _____ nehmen, um mögliche Gefahren zu vermeiden.",
        "options": ["in Sorge","in Acht","in Betracht"],
        "answer": "in Acht"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Lehrer hat den Schülern viel _____ entgegengebracht.",
        "options": ["Achtung", "Beachtung", "Verachtung"],
        "answer": "Achtung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich habe die _____, mein Studium nächstes Jahr abzuschließen.",
        "options": ["Absicht", "Möglichkeit", "Fähigkeit"],
        "answer": "Absicht"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen eine _____ vornehmen, um die Effizienz zu steigern.",
        "options": ["Änderung", "Entscheidung", "Kritik"],
        "answer": "Änderung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Seine Bemühungen haben große _____ gefunden.",
        "options": ["Anerkennung", "Kritik", "Bewunderung"],
        "answer": "Anerkennung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Die neuen Produkte müssen unsere _____ erfüllen.",
        "options": ["Anforderungen", "Erwartungen", "Träume"],
        "answer": "Anforderungen"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich werde eine _____ an die Firma stellen, um weitere Informationen zu erhalten.",
        "options": ["Anfrage", "Verpflichtung", "Angebot"],
        "answer": "Anfrage"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er hat uns ein _____ unterbreitet, das sehr vorteilhaft klingt.",
        "options": ["Angebot", "Versprechen", "Anfrage"],
        "answer": "Angebot"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten das Projekt in _____ nehmen, bevor es zu spät ist.",
        "options": ["Angriff", "Betracht", "Verwaltung"],
        "answer": "Angriff"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Die dunkle Gasse kann einem wirklich _____ machen.",
        "options": ["Angst", "Ruhe", "Freude"],
        "answer": "Angst"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ihr Anliegen ist für uns ein wichtiges _____.",
        "options": ["Thema", "Anlage", "Problem"],
        "answer": "Thema"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er hat einen _____ auf finanzielle Unterstützung.",
        "options": ["Anspruch", "Freude", "Gedanke"],
        "answer": "Anspruch"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sie können diesen Service in _____ nehmen, wenn Sie möchten.",
        "options": ["Anspruch", "Erwägung", "Freude"],
        "answer": "Anspruch"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich werde einen _____ auf das neue Förderprogramm stellen.",
        "options": ["Antrag", "Gedanke", "Angebot"],
        "answer": "Antrag"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Diese Technologie wird bald zur _____ kommen.",
        "options": ["Anwendung", "Verhandlung", "Verfügung"],
        "answer": "Anwendung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Lass uns an die _____ gehen, um das Problem zu lösen.",
        "options": ["Arbeit", "Diskussion", "Freizeit"],
        "answer": "Arbeit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sie hat wirklich gute _____ geleistet.",
        "options": ["Arbeit", "Bemühung", "Vorbereitung"],
        "answer": "Arbeit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Dieses Projekt macht viel _____.",
        "options": ["Arbeit", "Lösung", "Bilder"],
        "answer": "Arbeit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten uns an die _____ machen, um den Plan umzusetzen.",
        "options": ["Arbeit", "Pause", "Lösung"],
        "answer": "Arbeit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Das Projekt ist noch in _____.",
        "options": ["Arbeit", "Pause", "Freizeit"],
        "answer": "Arbeit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Nach langer Überlegung bin ich zu der _____ gelangt, dass wir den Plan ändern müssen.",
        "options": ["Auffassung", "Hoffnung", "Vermutung"],
        "answer": "Auffassung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Redner konnte die _____ der Zuhörer gewinnen.",
        "options": ["Aufmerksamkeit", "Verwirrung", "Beachtung"],
        "answer": "Aufmerksamkeit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wenn Ihnen unser Angebot zusagt, können Sie uns anschließend einen ______ erteilen.",
        "options": ["Auftrag", "Aufmerksamkeit", "Vorschlag"],
        "answer": "Auftrag"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Künstler wollte seine Gefühle zum _____ bringen.",
        "options": ["Ausdruck", "Eindruck", "Gefühl"],
        "answer": "Ausdruck"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Diese Optionen stehen zur _____, sodass Sie wählen können.",
        "options": ["Auswahl", "Entscheidung", "Verfügung"],
        "answer": "Auswahl"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Die neuen Regelungen werden große _____ auf die Wirtschaft haben.",
        "options": ["Auswirkungen", "Eindrücke", "Gedanken"],
        "answer": "Auswirkungen"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sein Vorschlag fand bei allen _____.",
        "options": ["Beachtung", "Verwirrung", "Ablehnung"],
        "answer": "Beachtung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Jeder kann einen _____ zur Verbesserung leisten.",
        "options": ["Beitrag", "Frage", "Anteil"],
        "answer": "Beitrag"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er übt seinen _____ seit fünf Jahren aus.",
        "options": ["Beruf", "Job", "Hobby"],
        "answer": "Beruf"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Nach dem Studium hat sie einen neuen _____ ergriffen.",
        "options": ["Beruf", "Job", "Hobby"],
        "answer": "Beruf"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Bitte gib mir _____, sobald du mehr weißt.",
        "options": ["Bescheid", "Nachricht", "Information"],
        "answer": "Bescheid"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich weiß über die aktuellen Entwicklungen _____.",
        "options": ["Bescheid", "Information", "Nachricht"],
        "answer": "Bescheid"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich möchte eine _____ für das neue Buch aufgeben.",
        "options": ["Bestellung", "Anfrage", "Bitte"],
        "answer": "Bestellung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Dieses Produkt kommt nicht in _____ für den Export.",
        "options": ["Betracht", "Verwendung", "Sorge"],
        "answer": "Betracht"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten verschiedene Optionen in _____ ziehen, bevor wir entscheiden.",
        "options": ["Betracht", "Verwendung", "Überlegung"],
        "answer": "Betracht"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Die Maschine ist momentan nicht im _____.",
        "options": ["Betrieb", "Lager", "Position"],
        "answer": "Betrieb"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich möchte in Bezug auf dieses Thema _____ nehmen.",
        "options": ["Bezug", "Ort", "Position"],
        "answer": "Bezug"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen unsere Fähigkeiten unter _____ stellen.",
        "options": ["Beweis", "Druck", "Prüfung"],
        "answer": "Beweis"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Die neuen Vorschläge stehen zur _____.",
        "options": ["Diskussion", "Entscheidung", "Verfügung"],
        "answer": "Diskussion"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er steht unter großem _____, weil die Deadline naht.",
        "options": ["Druck", "Entscheidung", "Position"],
        "answer": "Druck"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Seine Präsentation hat bei allen großen _____ gemacht.",
        "options": ["Eindruck", "Einfluss", "Beachtung"],
        "answer": "Eindruck"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten keinen negativen _____ auf die Kinder nehmen.",
        "options": ["Einfluss", "Deadline", "Eindruck"],
        "answer": "Einfluss"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Lass uns das Projekt zu _____ bringen.",
        "options": ["Ende", "Unbekannt", "Ziel"],
        "answer": "Ende"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Nach langem Überlegen habe ich einen _____ gefasst.",
        "options": ["Entschluss", "Plan", "Ende"],
        "answer": "Entschluss"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen heute noch eine _____ treffen.",
        "options": ["Entscheidung", "Frage", "Plan"],
        "answer": "Entscheidung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Hoffentlich wird unser Wunsch bald in _____ gehen.",
        "options": ["Erfüllung", "Wirklichkeit", "Realität"],
        "answer": "Erfüllung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Lehrer hat uns die _____ erteilt, den Raum zu verlassen.",
        "options": ["Erlaubnis", "Fehler", "Freiheit"],
        "answer": "Erlaubnis"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich habe einen großen _____ begangen.",
        "options": ["Fehler", "Erfolg", "Realität"],
        "answer": "Fehler"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Das neue Gesetz wird viele Änderungen zur _____ haben.",
        "options": ["Folge", "Anfrage", "Ergebnis"],
        "answer": "Folge"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen eine _____ stellen, um Unterstützung zu erhalten.",
        "options": ["Forderung", "Entscheidung", "Frage"],
        "answer": "Forderung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten dieser Frage intensiver _____.",
        "options": ["nachgehen", "folgen", "verfolgen"],
        "answer": "nachgehen"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Diese Option steht außer _____.",
        "options": ["Frage", "Meinung", "Forderung"],
        "answer": "Frage"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich möchte eine _____ stellen.",
        "options": ["Frage", "Sorgen", "Sicherheit"],
        "answer": "Frage"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich mache mir viele _____ über die Zukunft.",
        "options": ["Gedanken", "Fragen", "Überlegungen"],
        "answer": "Gedanken"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Das Gebäude ist in großer _____.",
        "options": ["Gefahr", "Sorge", "Hoffnung"],
        "answer": "Gefahr"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich hoffe, ich habe die _____ zu lernen.",
        "options": ["Gelegenheit", "Entscheidung", "Frage"],
        "answer": "Gelegenheit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir führten ein intensives _____ über die Pläne.",
        "options": ["Gespräch", "Streit", "Direkt"],
        "answer": "Gespräch"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er konnte den _____ nicht angeben.",
        "options": ["Grund", "Frage", "Antrag"],
        "answer": "Grund"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich möchte Ihren _____ erwidern.",
        "options": ["Gruß", "Danksagung", "Wunsch"],
        "answer": "Gruß"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Das Buch hat großes _____ geweckt.",
        "options": ["Interesse", "Wunsch", "Tatigkeit"],
        "answer": "Interesse"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen das Risiko in _____ nehmen.",
        "options": ["Kauf", "Erwägung", "Betracht"],
        "answer": "Kauf"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich habe die Neuigkeit zur _____ genommen.",
        "options": ["Kenntnis", "Information", "Wissen"],
        "answer": "Kenntnis"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen Kontakt mit dem Kunden _____.",
        "options": ["aufnehmen", "steigen", "erzeugen"],
        "answer": "aufnehmen"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Lass uns in Kontakt mit den Entwicklern _____.",
        "options": ["treten", "widersprechen", "gehen"],
        "answer": "treten"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen die _____ für die Renovierung tragen.",
        "options": ["Kosten", "Übergaben", "Aufwand"],
        "answer": "Kosten"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Kritiker hat scharfe _____ an dem Film geübt.",
        "options": ["Kritik", "Beurteilung", "Bewertung"],
        "answer": "Kritik"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich hoffe, dass ich bald in der _____ bin, zu helfen.",
        "options": ["Lage", "Kritik", "Fähigkeit"],
        "answer": "Lage"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Lass uns das Projekt am Laufen _____.",
        "options": ["halten", "führen", "bewahren"],
        "answer": "halten"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich bin immer auf dem _____, was die neuesten Technologien angeht.",
        "options": ["Laufenden", "Aktuellen", "Neuigkeiten"],
        "answer": "Laufenden"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir planen, das neue Produkt auf den _____ zu bringen.",
        "options": ["Markt", "Verkauf", "Angebot"],
        "answer": "Markt"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich werde mein Bestes tun und mir _____ geben.",
        "options": ["Mühe", "Arbeit", "Sorge"],
        "answer": "Mühe"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sein ständiges Jammern geht mir auf die _____.",
        "options": ["Nerven", "Geduld", "Stimmung"],
        "answer": "Nerven"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten an diesem _____ festhalten.",
        "options": ["Plan", "Erfolg", "Sorge"],
        "answer": "Plan"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich habe die Prüfung erfolgreich _____.",
        "options": ["abgelegt", "anerkannt", "erfolgt"],
        "answer": "abgelegt"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sie hat ihm großen _____ entgegengebracht.",
        "options": ["Respekt", "Antwort", "Geduld"],
        "answer": "Respekt"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen eine _____ treffen.",
        "options": ["Entscheidung", "Antwort", "Frage"],
        "answer": "Entscheidung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich muss dem Kunden eine _____ zu seinem Vorschlag geben.",
        "options": ["Rückmeldung", "Achtung", "Erklärung"],
        "answer": "Rückmeldung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten mehr _____ auf die Bedürfnisse der Kinder nehmen.",
        "options": ["Rücksicht", "Achtung", "Beachtung"],
        "answer": "Rücksicht"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Auch in stressigen Zeiten ist es wichtig, _____ zu bewahren.",
        "options": ["Ruhe", "Euphorie", "Verwirrung"],
        "answer": "Ruhe"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Anwalt wird seinen Mandanten in _____ nehmen.",
        "options": ["Schutz", "Verteidigung", "Ruhe"],
        "answer": "Schutz"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er macht sich viele _____ um seine berufliche Zukunft.",
        "options": ["Sorgen", "Sprache", "Überlegungen"],
        "answer": "Sorgen"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Bei diesem riskanten Plan setzen wir viel _____.",
        "options": ["aufs Spiel", "auf Risiko", "in Gefahr"],
        "answer": "aufs Spiel"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich muss noch einmal die Frage der Atommüllentsorgung zur ____ bringen.",
        "options": ["Sprache", "Spiele", "Schutz"],
        "answer": "Sprache"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Dieses Thema wird oft zur _____ kommen.",
        "options": ["Sprache", "Meinung", "Erörterung"],
        "answer": "Sprache"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir müssen das System auf den neuesten _____ bringen.",
        "options": ["Stand", "Zustand", "Level"],
        "answer": "Stand"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Er steht auf dem _____, dass Umweltschutz oberste Priorität haben sollte.",
        "options": ["Standpunkt", "Punkt", "Sicht"],
        "answer": "Standpunkt"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir sollten zu diesem Thema Stellung _____.",
        "options": ["nehmen", "geben", "zeigen"],
        "answer": "nehmen"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir haben eine _____ für morgen Abend getroffen.",
        "options": ["Verabredung", "Kontakt", "Punkt"],
        "answer": "Verabredung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sie trägt die _____ für das gesamte Projekt.",
        "options": ["Verantwortung", "Aufsicht", "Kontrolle"],
        "answer": "Verantwortung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich werde mich mit dem neuen Kunden in _____ setzen.",
        "options": ["Verbindung", "Knopf", "Beziehung"],
        "answer": "Verbindung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Diese Nachricht hat ihn in große _____ gebracht.",
        "options": ["Verlegenheit", "Beziehung", "Ruhe"],
        "answer": "Verlegenheit"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Die Informationen stehen Ihnen jederzeit zur _____.",
        "options": ["Verfügung", "Erreichbarkeit", "Nutzen"],
        "answer": "Verfügung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Wir können Ihnen die benötigten Mittel zur _____ stellen.",
        "options": ["Verfügung", "Verwaltung", "Verlegenheit"],
        "answer": "Verfügung"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich kann für diese schwierige Situation _____ aufbringen.",
        "options": ["Verständnis", "Bar", "Absicht"],
        "answer": "Verständnis"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Der Lehrer gab dem fleißigen Schüler den _____.",
        "options": ["Vorzug", "Vorteil", "Vorgang"],
        "answer": "Vorzug"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich versuche, ihm aus dem _____ zu gehen, um Konflikte zu vermeiden.",
        "options": ["Weg", "Pfad", "Bahn"],
        "answer": "Weg"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Das Thema steht im _____ der Diskussionen.",
        "options": ["Zentrum", "Mittel", "Fokusieren"],
        "answer": "Zentrum"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Diese Probleme stehen in engem _____ mit der Wirtschaftspolitik.",
        "options": ["Zusammenhang", "Bezug", "Verbindung"],
        "answer": "Zusammenhang"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Ich habe _____ an der Richtigkeit dieser Informationen.",
        "options": ["Zweifel", "Fragen", "Danken"],
        "answer": "Zweifel"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Es steht außer _____, dass wir handeln müssen.",
        "options": ["Zweifel", "Frage", "Diskussion"],
        "answer": "Zweifel"
    }
];

let currentQuestion = 0;

function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const statusElement = document.getElementById('status');

    const question = questions[index];
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option, question.answer);
        optionsContainer.appendChild(button);
    });

    statusElement.textContent = `Frage ${index + 1} von ${questions.length}`;
}

function checkAnswer(selectedButton, selectedOption, correctAnswer) {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
        if (button === selectedButton && selectedOption !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });
    disableOptions();
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => button.disabled = true);
}

document.getElementById('prev-button').onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
};

document.getElementById('next-button').onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        alert("Das waren alle Fragen!");
    }
};

document.getElementById('jump-button').onclick = () => {
    const questionNumberInput = document.getElementById('question-number');
    const questionNumber = parseInt(questionNumberInput.value, 10);

    if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= questions.length) {
        currentQuestion = questionNumber - 1;
        showQuestion(currentQuestion);
    } else {
        alert("Bitte eine gültige Fragenummer eingeben!");
    }
};

// İlk soruyu göster
showQuestion(currentQuestion);
