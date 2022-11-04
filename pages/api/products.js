// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
        res.status(200).json({
          msg: 'GET ok'
        })
      break;
    case 'POST':
        res.status(201).json({
          msg: 'POST ok'
        })
    break;
  
    default: res.status(500).json({
      err: err.msg
    })
      break;
  }
}
