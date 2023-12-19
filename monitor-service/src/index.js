import app from "./app.js";
import "./config/database.js"
import { PORT } from "./config/env-vars.js"

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
})