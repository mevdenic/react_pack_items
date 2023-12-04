export function Stats({ items }) {
    if (!items.length)
        return (
            <footer className="stats">
                <em>Pack some items for your trip.💼</em>
            </footer>
        );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const packedPercentage = ((numPacked / numItems) * 100).toFixed();
    return (
        <footer className="stats">
            {packedPercentage == 100 ? (
                <em>You packed all your items and are ready to go! ✈</em>
            ) : (
                <em>
                    You have {numItems === 1 ? "1 item" : `${numItems} items`} on your list, and
                    have packed {numPacked}. ({packedPercentage}%)💼
                </em>
            )}
        </footer>
    );
}
