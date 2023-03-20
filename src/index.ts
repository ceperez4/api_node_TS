import app from './config/app';
import {PORT} from './config/config';

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});
