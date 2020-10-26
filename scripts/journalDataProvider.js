
const journal = [
    {
        id: 1,
        date: "10/10/2020",
        concept: "HTML",
        entry: "We talked about HTML and creting skeletons.",
        mood: "Confident"
    },
    {
        id: 2,
        date: "10/11/2020",
        concept: "CSS Flexbox",
        entry: "We talked about CSS and how to use flexbox to arrange a page.",
        mood: "Kinda Get It"
    },
    {
        id: 3,
        date: "10/12/2020",
        concept: "Forms",
        entry: "We talked about forms and how to make them function with js.",
        mood: "Kinda Get It"
    }
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
   )
    return sortedByDate
}

//journal.sort((currentEntry, nextEntry) => new Date(currentEntry.date).getTime() - new Date(nextEntry.date).getTime());

//return(journal);