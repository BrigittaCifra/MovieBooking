import { create } from "zustand";

/*Motivering till att denna data sparas i form av en zustand store:
booking sidan och headern behöver ha tillgång städerna. Headern finns med på alla sidor.
i App ska endast routes finnas, och om den läggs i Layout.jsx blir det svårt att hitta och underhålla

Genom att använda zustand är det även enkelt att skala upp applikationen eftersom city storen finns
redan på plats ifall man ska bygga ut så att städer hämtas dynamiskt via ett API 

Tar gärna emot feedback ifall jag tänker fel:)
*/

const useCitiesStore = create((set) => ({
    cities: (["Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås", "Umeå"])
}));

export default useCitiesStore;