db.collection("music").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added')
        {
            renderSong(change.doc.data(), change.doc.id);
        }
    })
})