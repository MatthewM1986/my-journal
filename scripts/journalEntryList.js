
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent} from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".container__form")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entriesArray = useJournalEntries()
    let buildEntryList = ""
    for (const singleEntry of entriesArray) {
        buildEntryList = JournalEntryComponent(singleEntry)
    
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += `
        <form action="" class="container__form--entries">
            ${buildEntryList}
        </form>
        `
    }
}