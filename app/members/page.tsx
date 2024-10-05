import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/images/shinsyakaijin_run_man2.png",
        width: 240,
        height: 240,
      },
      name: "David Chang",
      position: "CEO",
      profile:
        "グローバルテクノロジー起業での豊富な経験を持つリーダー。以前は大手ソフトウェア起業の上級幹部として勤務し\
                、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、\
                会社の成長をけん引している。",
    },
    {
      id: "2",
      image: {
        url: "/images/shinsyakaijin_woman2.png",
        width: 240,
        height: 240,
      },
      name: "Emily Sanders",
      position: "COO",
      profile:
        "書くのめんどくせえええええええええええええええええええええええええええええええええええええええええ\
                、書くのめんどくさいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい、\
                会社の成長をけん引している。",
    },
    {
      id: "3",
      image: {
        url: "/images/megane_ossan.jfif",
        width: 240,
        height: 240,
      },
      name: "John Wilson",
      position: "CTO",
      profile:
        "打つのめんどくせえええええええええええええええええええええええええええええええええええええええええ\
                  、打つのめんどくさいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい、\
                  会社の成長をけん引している。",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p>className={styles.empty}メンバーが登録されていません。 </p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.position}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
