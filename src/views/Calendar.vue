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
        </div>
        <div>
            <Calendar />
        </div>
</template>

<style scoped>
.h1 {
    text-align: center;
}



</style>