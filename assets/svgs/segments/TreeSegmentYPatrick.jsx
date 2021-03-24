import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

function TreeSegmentYPatrick(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth}
      height={windowWidth * (39 / 90)}
      viewBox="0 0 90 39"
      {...props}
    >
      <Path fill="#0ff" d="M0 0h90v39H0z" />
      <G stroke="#000">
        <Path
          d="M-1.607 97.64c-1.308.903-2.328 2.171-3.159 3.527-.83 1.356-1.486 2.81-2.198 4.232-1.317 2.633-2.83 5.172-3.978 7.883-1.455 3.435-2.31 7.138-2.359 10.867-.015 1.117.043 2.243.3 3.33.257 1.087.722 2.139 1.452 2.984.296.342.643.654 1.063.822.283.113.595.156.899.124a5.877 5.877 0 01-.236-.4 5.473 5.473 0 01-.602-1.79c-.157-1.065.032-2.167.467-3.152.318-.718.762-1.374 1.233-2.003 1.344-1.797 2.916-3.408 4.49-5.007 2.676-2.715 5.372-5.41 8.002-8.168 1.771-1.859 3.517-3.754 5.003-5.847.552-.778 1.071-1.59 1.407-2.483.336-.893.481-1.878.271-2.809a4.246 4.246 0 00-.96-1.847 5.281 5.281 0 00-1.672-1.253c-1.262-.612-2.704-.763-4.104-.689-1.88.1-3.77.608-5.319 1.678zM39.417 106.366c-.992-.091-2 .072-2.938.409-.938.337-1.81.843-2.61 1.436-2.906 2.154-4.816 5.363-6.614 8.501-1.199 2.091-2.383 4.19-3.483 6.335-1.034 2.015-1.996 4.074-2.714 6.222-1.147 3.429-1.658 7.043-1.852 10.654-.13 2.422-.112 4.9.629 7.21.094.292.203.588.4.823.099.118.22.218.358.285a.797.797 0 00.447.076.921.921 0 00.525-.289c.141-.146.246-.323.345-.5.543-.977.93-2.03 1.381-3.051 1.06-2.402 2.469-4.64 4.068-6.722 2.902-3.779 6.431-7.053 10.294-9.841a47.33 47.33 0 014.897-3.123c1.562-.858 3.197-1.62 4.566-2.761.684-.57 1.298-1.235 1.752-2.001.455-.767.746-1.639.774-2.53.034-1.098-.332-2.178-.869-3.137-.536-.959-1.239-1.812-1.936-2.662-.993-1.21-1.992-2.433-3.2-3.43-1.21-.995-2.66-1.76-4.22-1.904z"
          fill="#784421"
          strokeWidth={0.265}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M-13.254 122.49c.57.072 1.131.212 1.669.416.53.201 1.038.466 1.49.808.352.267.668.58.938.927"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M-10.609 123.464a8.407 8.407 0 00-.899 3.57c-.024.982.132 1.986.59 2.854a4.41 4.41 0 001.33 1.52M19.723 134.027c.475.549.94 1.105 1.397 1.668.63.779 1.247 1.58 2.018 2.217.86.711 1.9 1.203 2.996 1.417"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M24.787 138.91a56.776 56.776 0 00-1.954 3.75c-.458.965-.89 1.946-1.191 2.97a12.46 12.46 0 00-.475 2.634M21.846 136.694a21.258 21.258 0 00-.93 3.072 22.305 22.305 0 00-.516 4.308 23.45 23.45 0 00.286 4.234"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M20.21 147.602c-.324-.657-.675-2.434-.792-4.007-.164-2.2-.03-5.294.344-7.989.075-.54.155-.99.177-1 .022-.008.165.134.317.318.35.422 1.391 1.702 1.404 1.727.006.01-.097.332-.229.716-.916 2.674-1.295 5.372-1.17 8.342.023.547.076 1.277.119 1.622.042.345.057.62.033.61-.025-.01-.116-.162-.203-.339z"
          fill="#e9c6af"
          strokeWidth={0.067}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M20.717 147.2c-.246-2.111-.176-4.497.194-6.546.15-.83.505-2.235.721-2.853.086-.245.183-.54.215-.656l.06-.21.362.385a7.578 7.578 0 001.752 1.388l.524.293-.232.418c-1.24 2.233-2.55 5.116-2.87 6.314-.19.704-.347 1.532-.395 2.07-.026.283-.053.362-.125.362-.059 0-.135-.357-.206-.965z"
          fill="#e9c6af"
          strokeWidth={0.067}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M21.417 147.483c.106-.757.327-1.666.593-2.436.42-1.217 1.53-3.562 2.598-5.49l.254-.458.525.18c.29.1.518.198.508.219a7.03 7.03 0 01-.23.345c-.894 1.285-1.333 2.103-2.702 5.03-1.501 3.208-1.668 3.49-1.546 2.61zM-10.953 130.797c-1.31-1.085-2.076-3.15-2.154-5.806-.028-.967.002-2.284.053-2.305.012-.005.285.053.605.13.521.125 1.563.534 1.595.626.006.02-.115.396-.27.835-.689 1.95-.73 3.714-.122 5.24.224.565.387.846.714 1.235l.424.504-.277-.109a2.573 2.573 0 01-.568-.35z"
          fill="#e9c6af"
          strokeWidth={0.067}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
        <Path
          d="M-10.59 130.095c-.922-1.45-.986-3.653-.17-5.887l.216-.594.19.124c.103.069.37.298.593.51l.405.386-.156.265a18.78 18.78 0 00-.569 1.192c-.365.82-.422.998-.495 1.543-.107.792-.06 1.607.133 2.29.084.297.132.531.107.52-.025-.013-.14-.17-.254-.349z"
          fill="#e9c6af"
          strokeWidth={0.067}
          transform="matrix(.1747 0 0 .18882 18.99 -3.239)"
        />
      </G>
      <Path
        d="M40.5 39l-1.19-8.195c-.398-2.732-.756-1.512-1.134-2.268-.379-.756-1.512-.378-2.268-.567-.756-.189-3.402-1.26-5.103-1.89-1.701-.63-2.016-.63-3.024-.945-1.008-.315-3.275-.881-4.913-1.323-1.639-.44-1.134-.63-1.701-.944-.568-.316-1.008-1.134-1.512-1.701-.504-.568-1.386-1.512-2.08-2.268-.692-.756-.88-.882-1.322-1.323-.441-.441-1.638-.504-2.457-.756-.82-.252-1.638-.252-2.457-.378s-1.133-.252-1.7-.378c-.568-.126-4.536-.756-4.536-.756l.378-1.89 2.645.19.945.755h3.78l5.48.19 1.513.755 3.59 2.079c1.197.693 1.89.756 2.835 1.134.945.378 4.032 1.134 6.048 1.7 2.016.567 2.142-.503 3.213-.755 1.07-.252 2.772-.504 4.158-.756 1.385-.252 2.016-.504 3.023-.756 1.008-.252.883-1.008 1.323-1.512.44-.504.558-1.398.378-2.079l-.945-3.59-3.024-5.292C39.435 3.716 40.5 0 40.5 0h9l1.905 5.103.945 3.968c.75 3.155 1.764 5.86 1.7 6.993-.063 1.134-2.96 5.229-3.212 7.749-.252 2.52 0 0-.756 4.724-.365 2.278.126 3.34 0 3.969-.126.63-.582 6.494-.582 6.494h-9"
        fill="purple"
      />
      <G stroke="#000">
        <Path
          d="M34.745 106.774a2076.383 2076.383 0 0018.308-5.612c8.186-2.551 16.367-5.156 24.722-7.083 4.628-1.067 9.308-1.926 14.032-2.406 5.11-.518 10.284-.59 15.368.134 2.496.356 4.97.905 7.35 1.737 3.845 1.345 7.397 3.412 10.824 5.613 1.98 1.272 3.956 2.616 5.48 4.41 1.465 1.725 2.455 3.797 3.34 5.88 1.67 3.926 3.038 8.039 3.341 12.294.357 5.01-.773 10.001-2.138 14.834-.926 3.278-1.97 6.54-3.463 9.601-1.494 3.062-3.457 5.933-6.025 8.172-3.518 3.068-7.978 4.808-11.894 7.35-.637.414-1.274.856-2.004 1.07a3.53 3.53 0 01-2.302-.12l-.189-1.087c.481-.784.93-1.588 1.347-2.41.525-1.036.997-2.1 1.559-3.118.55-.995 1.182-1.942 1.748-2.929 2.731-4.764 3.82-10.378 3.516-15.861-.107-1.937-.399-3.914-1.336-5.613-.966-1.75-2.56-3.099-3.474-4.877-.171-.333-.318-.68-.52-.993-.203-.314-.472-.6-.817-.745a1.558 1.558 0 00-.728-.106c-.246.02-.487.09-.716.184-.458.19-.865.48-1.295.724-1.472.834-3.195 1.11-4.884 1.185-1.69.074-3.385-.038-5.072.085-1.963.143-3.93.604-5.88.334-1.197-.166-2.338-.603-3.51-.898-1.172-.295-2.434-.443-3.573-.038-.141.05-.281.11-.4.2a1.08 1.08 0 00-.385.623 1.66 1.66 0 00.017.74c.112.485.378.917.568 1.377.426 1.034.455 2.195.29 3.3-.164 1.106-.513 2.175-.825 3.248-.682 2.351-1.194 4.75-1.937 7.083-.67 2.1-1.532 4.161-1.804 6.348-.223 1.786-.032 3.65.735 5.278.485 1.032 1.187 1.948 1.937 2.807.241.275.49.549.668.868.083.148.15.306.2.468a.869.869 0 01-.467.267c-.232.048-.475-.003-.696-.09-.221-.086-.426-.208-.64-.31-.74-.356-1.587-.483-2.272-.936-.435-.288-.778-.69-1.136-1.07-.866-.916-1.845-1.717-2.74-2.605-.672-.668-1.3-1.389-1.785-2.203-.485-.815-.823-1.729-.887-2.675-.065-.961.152-1.916.267-2.873.157-1.306.123-2.627.134-3.942.011-1.361.07-2.73-.134-4.076-.31-2.053-1.217-3.959-2.004-5.88-.52-1.267-.995-2.56-1.688-3.741-.694-1.18-1.632-2.26-2.856-2.874a1.656 1.656 0 00-.334-.133 1.179 1.179 0 00-.529-.003c-.174.036-.34.103-.498.185-.315.164-.598.384-.91.553-.64.343-1.378.455-2.102.478-.725.023-1.45-.037-2.175-.01-1.474.053-2.908.46-4.343.801-2.106.501-4.251.864-6.415.936-1.625.054-3.251-.057-4.877-.067-1.582-.009-3.165.078-4.744 0-2.014-.099-4.03-.47-5.88-1.27a12.514 12.514 0 01-3.742-2.472c-2.047-1.98-3.338-4.769-3.34-7.617-.003-1.69.438-3.37 1.202-4.878a12.874 12.874 0 012.673-3.54 13.84 13.84 0 012.739-2.005z"
          fill="#a05a2c"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M30.285 119.204a6.876 6.876 0 01.52-3.26 6.497 6.497 0 011.134-1.795c.815-.91 1.877-1.554 2.93-2.174.541-.319 1.093-.639 1.7-.803.856-.23 1.76-.138 2.646-.094 1.164.057 2.33.025 3.496.047 1.229.024 2.458.108 3.686.047 1.755-.087 3.48-.469 5.197-.85.72-.16 1.442-.32 2.173-.425.907-.13 1.833-.175 2.74-.048 1.208.17 2.362.64 3.402 1.276a9.846 9.846 0 012.315 1.937c.694.803 1.245 1.75 1.465 2.788.187.883.129 1.8 0 2.693-.143.99-.375 1.977-.803 2.882-.783 1.657-2.191 2.96-3.78 3.874-.95.547-1.972.966-3.024 1.276-2.154.634-4.417.808-6.662.85-1.417.027-2.835.003-4.252.048-1.829.056-3.671.226-5.48-.048-2.064-.312-4.018-1.197-5.717-2.41-1.2-.855-2.303-1.901-2.977-3.212a6.522 6.522 0 01-.709-2.599z"
          fill="#e9c6af"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M30.333 120.244a22.347 22.347 0 012.078-1.465c.872-.542 1.792-1.03 2.788-1.276 1.03-.255 2.11-.244 3.166-.141.273.026.548.06.814.13.266.069.525.177.745.342.33.249.562.63.614 1.04.042.328-.028.661-.138.973-.11.313-.258.61-.382.916-.119.296-.219.608-.425.85a1.675 1.675 0 01-.547.404c-.205.1-.421.176-.634.258a9.02 9.02 0 00-3.922 2.977M59.531 124.968a5.014 5.014 0 00-1.086-1.559c-.563-.546-1.246-.953-1.938-1.323-.584-.312-1.18-.603-1.748-.945-.386-.232-.765-.493-1.04-.85-.238-.31-.39-.696-.377-1.087.01-.27.096-.533.226-.77.129-.237.3-.449.483-.647.429-.465.95-.87 1.559-1.04.472-.132.975-.117 1.458-.035.483.083.952.232 1.424.366.71.203 1.428.374 2.126.614 1.043.36 2.033.87 2.93 1.512M42.759 119.251c-.042.37.025.753.189 1.087.205.42.553.752.92 1.04.52.404 1.105.742 1.749.874.535.11 1.089.072 1.63 0 .742-.1 1.484-.27 2.15-.615.513-.265.985-.645 1.252-1.157.122-.235.198-.493.236-.756a2.08 2.08 0 00-.013-.724 1.393 1.393 0 00-.318-.646c-.175-.194-.408-.325-.638-.449a4.62 4.62 0 00-.708-.33c-.568-.193-1.185-.172-1.78-.103-.595.07-1.188.185-1.787.173-.578-.011-1.165-.14-1.725 0a1.606 1.606 0 00-.85.52c-.247.299-.361.703-.307 1.087z"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M44.152 117.621c.405-.465.79-.946 1.158-1.44.137-.185.276-.377.472-.497.186-.113.408-.153.625-.157.218-.004.434.025.651.04.192.012.384.012.574.04.19.027.38.083.536.195.116.084.209.195.287.314.078.119.142.246.21.372.22.412.473.808.755 1.18"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M126.48 470.088c-1.76-1.42-4.142-3.705-5.291-5.077-2.233-2.663-4.798-7.416-5.112-9.47-.188-1.227-.136-1.289 2.874-3.388 4.604-3.211 9.104-5.675 12.412-6.797 5.291-1.794 15.717-1.622 18.548.306 3.008 2.048 3.296 4.28 1.202 9.323-1.659 3.996-2.057 4.6-3.49 5.299-.636.309-2.842 1.363-4.905 2.341-4.34 2.059-7.482 4.334-10.613 7.684-1.22 1.306-2.265 2.372-2.321 2.369-.056-.003-1.542-1.169-3.303-2.59zM224.487 469.886c-1.895-3.605-5.187-6.146-14.631-11.296-4.203-2.292-5.303-3.133-6.6-5.044-1.756-2.587-.97-5.407 2.392-8.588 2.96-2.798 3.848-3.166 7.606-3.151 2.793.011 4.042.255 9.537 1.857 7.338 2.139 10.611 3.434 14.056 5.56 2.362 1.459 2.473 1.587 2.357 2.744-.223 2.22-2.277 7.2-4.088 9.908-1.91 2.855-5.582 6.696-8.17 8.546l-1.582 1.13z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#d38d5f"
          strokeWidth={0.358}
        />
        <Path
          d="M42.947 120.405c.27-.191.605-.287.935-.267.27.016.54.113.735.3.111.107.195.24.25.385.073.185.098.385.101.584.003.19-.014.381-.05.568M48.526 121.975a2.392 2.392 0 01.15-1.102c.078-.198.182-.387.319-.55.136-.162.306-.298.5-.386a1.26 1.26 0 011.236.117"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M173.56 461.698c-1.156-.135-3.282-.741-3.214-.917.018-.048.064-.456.102-.908.31-3.659-1.272-5.97-4.321-6.31a6.2 6.2 0 00-3.096.496l-.402.182-.159-.483c-.29-.884-.358-1.428-.358-2.908 0-1.506.047-1.884.324-2.602.578-1.504 1.9-2.613 3.664-3.076 1.089-.285 2.04-.305 4.629-.1 2.233.178 3.329.127 6.756-.317 2.79-.362 3.787-.439 5.113-.394 2.135.073 3.361.423 5.493 1.568 1.987 1.067 2.693 1.667 3.214 2.728.332.674.456 1.122.542 1.954.07.67-.035 2.163-.168 2.396-.015.026-.16-.02-.323-.102-1.907-.954-4.227-.63-5.897.823-1.62 1.412-2.639 3.912-2.639 6.48v.467l-.678.166c-2.976.731-6.578 1.09-8.581.857z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#c87137"
          strokeWidth={0.063}
        />
        <Path
          d="M168.322 459.78c-1.762-1.042-4.299-3.232-4.876-4.21l-.228-.384.47-.196c1.24-.518 2.726-.456 3.86.16 1.083.59 1.675 1.66 1.828 3.309.081.875-.012 1.783-.182 1.783-.05 0-.443-.207-.872-.461zM183.985 459.318c.206-2.437 1.562-4.666 3.339-5.487.978-.453 2.307-.466 3.29-.033.614.27.664.324.59.624-.322 1.314-2.197 3.317-4.166 4.452-.733.422-2.828 1.368-3.031 1.368-.055 0-.065-.416-.022-.924z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#502d16"
          strokeWidth={0.126}
        />
        <Path
          d="M171.19 444.018c-.103-.028-.8-.087-1.548-.133l-1.36-.082.382-.462c.21-.253 1.105-1.398 1.99-2.544.885-1.146 1.843-2.317 2.13-2.603.947-.943 1.935-1.081 5.756-.806 2.922.211 3.44.545 4.893 3.154.444.797 1.022 1.79 1.285 2.205.262.415.465.767.451.781-.014.014-.31-.033-.657-.104-1.173-.242-4.232-.148-6.881.211-2.187.297-5.924.52-6.44.383z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#d38d5f"
          strokeWidth={0.126}
        />
        <Path
          d="M34.745 119.77c.092.479.373.918.768 1.203.293.21.644.336 1.003.367.366.032.741-.036 1.074-.193.332-.158.622-.405.83-.709M40.992 121.674c.544.455 1.14.848 1.771 1.17.486.247.998.454 1.537.534.839.125 1.69-.062 2.539-.067.895-.004 1.807.194 2.673-.033.452-.119.868-.35 1.25-.62.38-.271.73-.583 1.088-.883.316-.265.64-.521.97-.769M47.073 122.343l.067.968M55.926 120.271c.258.347.672.573 1.103.602.295.02.592-.05.86-.178.266-.128.503-.312.71-.524.373-.382.651-.857.802-1.37M55.559 114.96a1.85 1.85 0 001.97.333M35.68 116.563l.836-.768M74.3 149.086a3.098 3.098 0 011.22-.685c.545-.158 1.122-.163 1.687-.117a9.475 9.475 0 014.06 1.303M114.258 152.912c.093.417.29.81.568 1.135.313.367.723.641 1.162.84.438.2.906.327 1.377.43 1.499.329 3.05.423 4.577.267a14.157 14.157 0 003.274-.735M109.684 162.648a2730.398 2730.398 0 005.943-7.866M110.984 162.934a73.226 73.226 0 012.472-1.97c1.346-1.028 2.75-2.028 3.775-3.375a8.389 8.389 0 001.103-1.938M116.229 160.362a33.426 33.426 0 005.045-4.678"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M75.604 148.301c.27 1.466.792 2.885 1.537 4.176.751 1.302 1.722 2.467 2.773 3.542.849.869 1.753 1.684 2.706 2.438M84.925 158.825a8.775 8.775 0 01-2.172-1.67 9.867 9.867 0 01-1.837-2.807c-.583-1.32-.905-2.738-1.236-4.143-.121-.512-.244-1.024-.368-1.536"
          fill="none"
          strokeWidth={0.265}
          transform="matrix(.16114 .0675 -.07295 .17416 18.093 -10.17)"
        />
        <Path
          d="M308.025 596.879c-2.18-.952-3.045-1.628-5.864-4.58-1.171-1.226-3.92-3.888-6.107-5.915-2.188-2.027-4.745-4.477-5.682-5.443-5.25-5.412-8.153-10.63-8.855-15.921-.18-1.35-.194-1.317.942-2.089.81-.55 2.472-1.36 2.79-1.36.11 0 .198.1.198.222s.198 1.001.44 1.954c2.12 8.344 5.904 15.264 12.48 22.826 1.665 1.913 6.934 7.162 8.925 8.89 2.084 1.809 2.119 1.843 1.89 1.841-.102 0-.623-.192-1.157-.425z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#e9c6af"
          strokeWidth={0.126}
        />
        <Path
          d="M317.52 600.648c-.382-.105-1.519-.587-2.526-1.073-1.007-.485-1.893-.882-1.968-.881-.076 0-.332-.162-.568-.361-.237-.2-1.141-.95-2.01-1.67-4.366-3.617-9.416-8.634-12.824-12.742-5.472-6.595-9.049-13.604-10.852-21.262-.178-.755-.305-1.392-.282-1.415.023-.022.465-.107.983-.188 1.182-.186 4.755-.077 6.475.195 1.96.311 5.13 1.055 5.354 1.256.015.014.626 2.517 1.356 5.561.73 3.045 1.587 6.471 1.906 7.615 2.39 8.583 5.499 14.313 10.47 19.293 1.9 1.904 3.94 3.551 5.923 4.781l.995.618-.328.172c-.513.268-1.345.308-2.104.1z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#e9c6af"
          strokeWidth={0.126}
        />
        <Path
          d="M318.394 598.008c-3.618-2.461-7.134-6.191-9.54-10.122-2.27-3.708-3.995-7.957-5.479-13.498-.583-2.18-2.767-11.352-2.715-11.404.098-.098 2.768 1.056 4.422 1.913l1.768.915-.063 1.384c-.306 6.708.599 12.094 2.9 17.255 1.5 3.367 3.764 6.712 7.46 11.024 1.464 1.706 2.59 3.19 2.494 3.287-.03.03-.592-.309-1.246-.754z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#e9c6af"
          strokeWidth={0.126}
        />
        <Path
          d="M414.703 611.558c.001-.54.74-2.268 1.643-3.84.902-1.57 3.245-6.07 5.207-10 1.962-3.928 5.034-9.596 6.828-12.596l3.26-5.454.61 1.186c.334.653 1.343 1.864 2.242 2.693l1.634 1.506-10.397 13.744c-5.718 7.558-10.539 13.743-10.713 13.743-.174 0-.315-.442-.314-.982zM417.2 614.805a68.437 68.437 0 00-.992-.321c-.356-.112 13.039-18.321 20.285-27.575l.9-1.149 1.779.672c.978.369 3.01.943 4.517 1.276l2.738.605-.417.978c-2.208 5.181-7.006 10.407-15.595 16.988-3.045 2.333-6.776 5.259-8.291 6.501-2.624 2.152-3.484 2.505-4.924 2.025z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#e9c6af"
          strokeWidth={0.358}
        />
        <Path
          d="M422.2 614.546c0-.076 3.014-2.471 6.697-5.323 11.756-9.102 14.816-12.248 17.928-18.427l1.148-2.28 2.166.226a52.7 52.7 0 004.519.227h2.352l-4.101 4.147c-4.248 4.296-10.662 10-13.074 11.627-3.275 2.208-14.015 8.662-15.432 9.273-1.497.645-2.203.815-2.203.53zM453.346 594.686l5.688-5.712 3.816-.557c2.098-.307 4.434-.72 5.19-.92.757-.198 1.439-.297 1.517-.22.402.403-20.599 13.12-21.665 13.12-.13 0 2.325-2.57 5.454-5.711z"
          transform="matrix(.04263 .01786 -.0193 .04608 18.093 -10.17)"
          fill="#e9c6af"
          strokeWidth={0.358}
        />
      </G>
    </Svg>
  );
}

export default TreeSegmentYPatrick;
