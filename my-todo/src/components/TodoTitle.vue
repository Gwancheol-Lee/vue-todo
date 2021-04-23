<!-- 인사말과 태스크 총 개수를 보여주는 곳 -->
<template>
    <div class="title">
        <p class="title__message">
            {{ message }}
        </p>
        <p class="title__task">
            You've got
            <span class="title__task-total">{{ taskTotal }}</span> tasks today.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello, user.",
            taskTotal: 5
        }
    },
}
</script>