<script setup>
import Calendar from '../components/Calendar.vue'
import CalendarDate from '../components/CalendarDate.vue'

</script>
<template>
    <div class="container-calendar">
    <h1>CALENDAR</h1>
        <div>
            <CalendarDate />
        </div>
        <div>
            <Calendar />
        </div>
    </div>
</template>

<style scoped>
.h1 {
    text-align: center;
}
.container-calendar {
    display: flex;
    justify-content: center;
}
</style>