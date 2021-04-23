<template>
    <div class="controller">
        <div class="select">
            <label for="order">Order</label>
            <select name="order" id="order" class="selectbox">
                <option value="data-asc">Date Ascending</option>
                <option value="data-desc">Date Descending</option>
                <option value="name-asc">Name Ascending</option>
                <option value="data-desc">Name Descending</option>
            </select>
        </div>
        <button calss="clear">Clear All</button>
    </div>
</template>