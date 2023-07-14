import { Box, Button, ButtonGroup } from "@mui/material";
import useCount from "../../hooks/useCount";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = ({ initial = 1, stock, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      alignItems={"center"}
    >
      <ButtonGroup>
        <Button aria-label="reduce" onClick={decrement}>
          <RemoveIcon fontSize="small" />
        </Button>
        <Button>{count}</Button>
        <Button aria-label="increase" onClick={increment}>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Counter;
