import { useState } from "react";
import "../App.css";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
        );
    }
    function handleClearList() {
        if (!items.length) return;
        if (confirm("Delete all items from the list?")) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}
