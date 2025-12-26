const users = [
    {
        user_id: 1,
        name: "Alice",
        email: "alice@gmail.com",
    },
    {
        user_id: 2,
        name: "Bob",
        email: "bob@gmail.com",
    },
];

const enrollments = [
    {
        enrollment_id: 1,
        user_id: 1,
        package_id: 101,
        status: "active",
        current_index: 1,
    },
    {
        enrollment_id: 2,
        user_id: 2,
        package_id: 102,
        status: "expired",
        current_index: 100,
    },
];

const products = [
    {
        package_id: 101,
        package_name: "AMC 10 Basic",
        price: 100,
    },
    {
        package_id: 102,
        package_name: "AMC 12 Basic",
        price: 100,
    },
];

const problems = [
    { problem_id: 501, question_text: "2 + 2 = ?", answer: "4" },
    { problem_id: 502, question_text: "3x = 9, x = ?", answer: "3" },
    {
        problem_id: 901,
        question_text: "미분가능한 함수 f(x)에 대하여...",
        answer: "0",
    },
];

const packageItems = [
    // AMC 10 Basic (ID: 101)에는 문제 501번이 1번 타자입니다.
    { package_id: 101, problem_id: 501, order_number: 1 },

    // AMC 12 Basic (ID: 102)에는 문제 901번이 1번 타자입니다.
    { package_id: 102, problem_id: 901, order_number: 1 },
];

function fetchName(targetId) {
    const foundUser = users.find((e) => e.user_id === targetId);
    if (foundUser) {
        return foundUser.name;
    } else {
        return "유저를 찾을 수 없습니다.";
    }
}

function fetchEnrollment(targetId) {
    const foundUser = enrollments.find((user) => user.user_id === targetId);
    if (foundUser) {
        return foundUser;
    } else {
        return "찾을수가 없습니다.";
    }
}

function getMyPackageName(targetUserId) {
    const myEnrollment = enrollments.find((e) => e.user_id === targetUserId);
    if (!myEnrollment) {
        return "수강 기록 없음.";
    }
    const targetPackageId = myEnrollment.package_id;
    const foundProduct = products.find((p) => p.package_id === targetPackageId);
    if (foundProduct) {
        return foundProduct.package_name;
    } else {
        return "상품 정보 없음.";
    }
}

function getCurrentProblem(userId) {
    const is_User = enrollments.find((user) => user.user_id === userId);
    if (!is_User) {
        return "Enrolled User에서 정보를 찾을수 없음.";
    }
    const userPackageId = is_User.package_id; // Alice's package id = 101
    const userCurrentProblem = is_User.current_index; // Alice's current index = 1

    const packageItem = packageItems.find( p => p.package_id === userPackageId && p.order_number === userCurrentProblem);
    const foundProblem = problems.find(
        (problem) => problem.problem_id === packageItem.problem_id
    );

    if (packageItem.order_number === userCurrentProblem) {
        return foundProblem.question_text;
    }
}

console.log("Alice's current problem:", getCurrentProblem(1));