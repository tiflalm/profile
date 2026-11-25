# Thiflah Sa'diyah Alma Sholihah — Interactive Portfolio

Interactive engineering & IT portfolio hosted on GitHub Pages (`https://tiflalm.github.io/profile/`), highlighting experience across **IT & Streaming Support**, **IT Infrastructure & Networking**, **Smart Building & Electrical Systems**, and **Computer Vision & Applied AI**.

## Highlights

- **Education:** Associate Degree (D3) in Computer Technology, Telkom University — GPA **3.88 / 4.00** (Cum Laude), including Kampus Merdeka student exchange at Batam State Polytechnic.
- **Patent & Competition:**
  - Co-inventor of **SIPEKA** (Real-Time Driver Drowsiness Detection) — Registered Patent **EC002026058674** (April 2026).
  - **3rd Winner** (Innovation Track) — Huawei ICT Competition 2024–2025 National Final.
- **Certifications:** Huawei **HCIA-Security** (1000/1000), **HCIA-Datacom**, **HCIA-AI**, **Cisco CCNAv7**, **Google IT Support**, **SNI ISO 45001:2018**, **SNI ISO 37001:2016**, and **BNSP** certifications.

## Interactive Features (`index.html`)

- **Recruiter Role Lens:** Switch hero framing across *Full Profile*, *IT & Technical Support*, *Infra & Networking*, and *Computer Vision & AI*.
- **SIPEKA Telemetry Simulator:** Interactive multi-modal drowsiness threshold simulator (`EAR < 0.25` for 3.0s, `MAR > 0.15` for 5.0s, `|Head Tilt| > 15°` for 60s) with live JSON telemetry output.
- **Interactive Project & Code Modals:**
  - **Line Follower:** Digital PID controller (`Kp`, `Kd`, `Ki`, 8-channel ADC, Bluetooth/Serial) & Analog comparator notes.
  - **SIBUKU:** C++ modular library lending CLI (`v2.0` with Bubble Sort & `<ctime>`, `v1.0`, and sample output/fine calculation).
  - **Real-Time HSV Color Detection:** Python (`cv2` + `NumPy`) source code and interactive contour (`> 100 px`) preview across color ranges.
  - **Sistem Pengelolaan Kamar Kost Neira:** MariaDB (`tubes`) DDL schema (`CREATE TABLE`, `ALTER TABLE`, `FOREIGN KEY`) and `DESC` / foreign key notes.
  - **LED Flip-Flop PCB Circuit:** Component and schematic notes based on Falstad simulation and PCB assembly.
- **Career Explorer & Credential Vault:** Filterable career history (latest first) and categorized credentials/leadership records.

## Repository Structure

```text
.
├── index.html      # Main portfolio markup, interactive simulators & code/schema modals
├── styles.css      # Responsive styling and layout
└── README.md       # Repository documentation
