# 📦 Termux থেকে Mobile দিয়ে GitHub এ Project Upload (A to Z Guide)

এই ডকুমেন্টে আপনি শিখবেন কিভাবে **Termux ব্যবহার করে আপনার মোবাইল থেকে যেকোনো প্রজেক্ট GitHub এ আপলোড করবেন।**

---

## ⭐ Step 1: Termux Install

* Termux **F-Droid** থেকে ইনস্টল করুন। Play Store এর Termux ব্যবহার করবেন না।

---

## ⭐ Step 2: Termux Update

```bash
pkg update && pkg upgrade -y
```

---

## ⭐ Step 3: Git Install

```bash
pkg install git -y
```

---

## ⭐ Step 4: Storage Permission Allow

```bash
termux-setup-storage
```

এতে `/storage/emulated/0` (Internal Storage) Termux থেকে অ্যাক্সেসযোগ্য হবে।

---

## ⭐ Step 5: GitHub Account Create + Login

* [https://github.com](https://github.com) এ গিয়ে Account খুলুন
* Profile → Settings → Developer Settings → **Personal Access Token** → **Fine-grained Token** তৈরি করুন
* তৈরি করা Token কপি করে রাখুন

> আপনার GitHub Password হিসেবে এই Token ব্যবহার হবে।

---

## ⭐ Step 6: Git Username & Email সেট

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

---

## ⭐ Step 7: প্রজেক্ট ফোল্ডার Termux এ নেওয়া

যদি প্রজেক্ট Internal Storage এ থাকে:

```bash
cd /sdcard/YourProjectFolder
```

অথবা Termux-এর Home এ নিতে চাইলে:

```bash
cp -r /sdcard/YourProjectFolder ~/project
cd ~/project
```

---

## ⭐ Step 8: Git Init

```bash
git init
```

---

## ⭐ Step 9: সব ফাইল Add করা

```bash
git add .
```

---

## ⭐ Step 10: First Commit

```bash
git commit -m "First commit from Termux"
```

---

## ⭐ Step 11: GitHub এ নতুন Repo তৈরি

* GitHub → New Repository
* Repository URL কপি করুন (SSH নয়, HTTPS নিন)

Example:

```
https://github.com/username/myproject.git
```

---

## ⭐ Step 12: Remote সেট করা

```bash
git remote add origin https://github.com/username/myproject.git
```

---

## ⭐ Step 13: Main Branch সেট

```bash
git branch -M main
```

---

## ⭐ Step 14: GitHub এ Push করা

```bash
git push -u origin main
```

এখানে GitHub Username লিখতে বললে দিন।
Password চাইলে GitHub Token পেস্ট করুন → **(পেস্ট করতে শুধু একবার Tap করে রাখুন)**

---

## 🎉 Upload Complete!

আপনার প্রজেক্ট এখন GitHub এ আপলোড হয়ে গেছে।

---

## ⭐ নতুন ফাইল এড করলে আপলোড করতে:

```bash
git add .
git commit -m "Update"
git push
```

---

## ⭐ অন্য ব্রাঞ্চ Create + Push করতে:

```bash
git checkout -b newbranch
git push -u origin newbranch
```

---

## 📌 Common Errors Fix

### ❗ Error: "Repository not found"

* Repo private? → Public করুন
* URL ভুল? → ঠিক করে দিন

### ❗ Error: "Authentication failed"

* সঠিক Token ব্যবহার করুন
* Token এ repo permission আছে কিনা দেখুন

### ❗ Error: "src refspec main does not match any"

```bash
git branch -M main
git commit -m "init commit"
```

---

## ✔️ এখন যেকোনো Project মোবাইল থেকেই GitHub এ Upload করতে পারবেন!

---

চাইলে আমি চাইলে এই গাইডটি PDF/HTML আকারেও বানিয়ে দিতে পারব।
