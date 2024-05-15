export const data = [
  {
    id: "q1",
    category: "session manager",
    course: "aws sysops",
    question:
      "You have launched RHEL Linux EC2 instances, and you have attached the IAM role that allows them full access to SSM. Yet, you do not see them in the SSM Console. What's likely the issue?",
    answers: [
      {
        id: "q1a1",
        text: "The SSM agent is not installed or running on the EC2 instances",
      },
      {
        id: "q1a2",
        text: "The SSM service in down",
      },
      {
        id: "q1a3",
        text: "You first need to register these instances using the AWS CLI",
      },
      {
        id: "q1a4",
        text: "RHEL Linux EC2 instances are not compatible by SSM",
      },
    ],
  },
  {
    id: "q2",
    category: "session manager",
    course: "aws sysops",
    question:
      "After discovering a security issue, you would like to apply OS patching across all your EC2 instances. What's the best way of achieving this?",
    answers: [
      {
        id: "q2a1",
        text: "Use AWS Lambda",
      },
      {
        id: "q2a2",
        text: "Use SSM",
      },
      {
        id: "q2a3",
        text: "Use an automated script to SSH into all EC2 instances and apply the patch",
      },
    ],
    correct_answer_id: "q2a2",
  },
  {
    id: "q3",
    category: "session manager",
    course: "aws sysops",
    question:
      "You would like to externally maintain the configuration values of your main database, to be picked up at runtime by your application. What's the best place to store them to maintain control and version history?",
    answers: [
      {
        id: "q3a1",
        text: "SSM Parameter Store",
      },
      {
        id: "q3a2",
        text: "AWS S3",
      },
      {
        id: "q3a3",
        text: "EBS",
      },
      {
        id: "q3a4",
        text: "DynamoDB",
      },
    ],
    correct_answer_id: "q3a1",
  },
  {
    id: "q4",
    category: "session manager",
    course: "aws sysops",
    question:
      "You have a fleet of EC2 instances and you want to apply a patch to all of them without SSH into each EC2 instance. What's the easiest way to patch this fleet of EC2 instances?",
    answers: [
      {
        id: "q4a1",
        text: "AWS Lambda",
      },
      {
        id: "q4a2",
        text: "CloudWatch Events",
      },
      {
        id: "q4a3",
        text: "SSM Resource Groups",
      },
      {
        id: "q4a4",
        text: "SSM Run Command",
      },
    ],
    correct_answer_id: "q4a4",
  },
  {
    id: "q5",
    category: "session manager",
    course: "aws sysops",
    question:
      "What would you use to automate patching of your managed instances (EC2, on-premises)?",
    answers: [
      {
        id: "q5a1",
        text: "SSM Run Command",
      },
      {
        id: "q5a2",
        text: "SSM Patch Manger",
      },
      {
        id: "q5a3",
        text: "SSM Inventory",
      },
      {
        id: "q5a4",
        text: "SSM Automation",
      },
    ],
    correct_answer_id: "q5a2",
  },
]
