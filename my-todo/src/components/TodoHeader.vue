<!-- 로고와 현재 날짜가 들어가는 영역 -->
<template>
    <header class="header">
        <h1 class="logo">My Todo</h1>
        <p class="date">{{ timestamp }}</p>
    </header>
</template>

<script>

export default ({
    data() {
        return {
            timestamp : ""
        };
    },
    created() {
        const now       = new Date();
        const month     = now.getMonth() + 1;
        const date      = now.getDate();
        const weekList  = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
        const week      = weekList[now.getDay()];
        this.timestamp  = `${month}/${date} ${week}`; 
    }
});
</script>
