// --- 데이터 설정 (Data Setup) ---

const customers = [
    { id: 10, name: "Charlie", email: "charlie@email.com" },
    { id: 20, name: "Dana", email: "dana@email.com" }
];

const plans = [
    { plan_id: 1, name: "Basic Monthly", type: "Standard" },
    { plan_id: 2, name: "Pro Annual", type: "Premium" }
];

const subscriptions = [
    { sub_id: 100, customer_id: 10, plan_id: 1, status: "Active" }, // Standard
    { sub_id: 200, customer_id: 20, plan_id: 2, status: "Active" }  // Premium
];


// --- 함수 뼈대 (Function Skeleton) ---

// function isPremiumSubscriber(customerId) {
//     const subscription = subscriptions.find(s=>s.customer_id === customerId);
//     if (!subscription) {
//         return false;
//     }

//     const foundId = subscriptions.find(s => s.customer_id === customerId);// 1단계: subscriptions에서 customerId로 구독 기록을 찾습니다.
    
//     const planId = foundId.plan_id// 2단계: 찾은 기록에서 plan_id를 추출합니다.
    
//     const planToFind = plans.find(p=>p.plan_id === planId);// 3단계: plans에서 plan_id로 상세 요금제 정보를 찾습니다.
    
//     if (planToFind.type.toLowerCase() === "premium") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function makeSubscriptionCancelled(customerId) {
//     const findId = subscriptions.find(s => s.customer_id === customerId);
//     if (findId) {
//         return findId.status = "Cancelled"
//     } else {
//         return false;
//     }
// }

// makeSubscriptionCancelled(10);
// console.log(subscriptions[0].status);
