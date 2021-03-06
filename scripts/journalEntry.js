

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="container__journalEntryList">    
            <p>Date: ${entry.date}</p>
            <p>Concept: ${entry.concept}</p>
            <p>Entry: ${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
        </section>
    `
}