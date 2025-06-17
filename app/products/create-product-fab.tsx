import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function CreateProductFab() {
    return (
        <>
            <div className="absolute left-10 bottom-10">
                <Fab color="primary">
                    <AddIcon/>
                </Fab>
            </div>
        </>
    )
}