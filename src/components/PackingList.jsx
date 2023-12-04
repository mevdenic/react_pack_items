import { useState } from "react";
import { PackingItem } from "./PackingItem";

export function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    else if (sortBy === "description")
        sortedItems = items.toSorted((a, b) => b.description.localeCompare(a.description));
    else if (sortBy === "packed")
        sortedItems = items.toSorted((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <PackingItem
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear all</button>
            </div>
        </div>
    );
}
