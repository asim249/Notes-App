
        const addBtn = document.querySelector('#addBtn');
        const main = document.querySelector('#main')
        addBtn.addEventListener(
            'click', 
            function(){
                addNote();
            }
        )
        // save notes
            const saveNotes = () => {
                const notes = document.querySelectorAll('.note textarea');
                console.log(notes)
                const data = [];
                notes.forEach(
                    (notes) => data.push(notes.value)
                )
                if(data.length === 0){
                    localStorage.removeItem("notes")
                }else{
                    localStorage.setItem("notes", JSON.stringify(data))
                }
                console.log(data);
            }

          


        const addNote = (text = "") => {
            const note = document.createElement("div");
            note.classList.add("note");
            note.innerHTML = `
            <div class="tool">
                <ion-icon name="save-outline" class="save"></ion-icon>
                <ion-icon name="trash-outline" class="trash"></ion-icon>
            </div>
            <textarea name="" id="">${text}</textarea>
            `
            note.querySelector('.trash').addEventListener(
                'click', 
                function(){
                    note.remove()
                    saveNotes()
                }
            )
            note.querySelector('.save').addEventListener(
                'click', function(){
                    saveNotes()
                }
            )
            main.appendChild(note)
        }
        
  (  function() {
                const lsnotes = JSON.parse(localStorage.getItem("notes"));
            if(lsnotes === null){
                addNote()
            }else{
                lsnotes.forEach(
                (lsnotes) => {
                    addNote(lsnotes)
                }
            )
            }
                
            }) ()
