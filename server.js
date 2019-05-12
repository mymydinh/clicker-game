const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});