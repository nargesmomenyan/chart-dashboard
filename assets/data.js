export const allCallStats = {
    chart: {
        type: "Spline".toLowerCase(),
    }, 
    title: {
        text: "تعداد تماس‌ها در سه ماه اخیر"
    },
    xAxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد"]
    },
    yAxis: {
        title: {
            text: "تعداد تماس"
        }
    },
    tooltip: {
        pointFormat: '{series.name}: {point.y:,.0f}',
        
        useHTML: true
    },
    series: [
        {
            name: "موفق",
            data: [504, 258, 200]
        },
        {
            name: "ناموفق",
            data: [100, 20, 110]
        }
    ]
};
export const callBasedOnSpecialistStats = {
    chart: {
        type: "pie",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        options3d: {
            enabled: true,
            alpha: 25
        }
    },
    title: {
        text: "آمار تماس‌ها بر اساس تخصص پزشک در 3 ماه اخیر",

    },
    tooltip: {
        pointFormat: '{point.name}: %{point.percentage:.1f}',
        useHTML: true
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: %{point.percentage:.1f} ',
                useHTML: true
            }
        }
    },
    series: [
        {
            name: "تعداد تماس",
            colorByPoint: true,
            data: [
                { name: "پوست", y: 8 },
                { name: "قلب و عروق", y: 3 },
                { name: "کودکان", y: 1 },
                { name: "طب سنتی", y: 6 },
                { name: "فوق تخصص درد", y: 8 },
                { name: "باروری", y: 4 },
                { name: "بیهوشی", y: 4 },
                { name: "غدد", y: 1 },
                { name: "گوارش", y: 1 }
            ]
        }
    ]
};